const React = require('react');
const { useEffect, useState } = React;
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const Image = require('nordic/image');
const { injectI18n } = require('nordic/i18n');
const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
});


function View(props) {

    const [products, setProducts] = useState([]);

    const { i18n, translations, imagesPrefix } = props;
    const preloadedState = {
        i18n,
        translations,
        imagesPrefix
    };


    useEffect(() => {
        restclient.get('/get-products')
            .then(res => setProducts(res.data))
            .catch(() => [])
    }, [])

    return (
        <>
            <Script>
                {`
                    window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
                    console.log('Products page is loaded!');
                `}
            </Script>
            <Script src='vendor.js' />
            <Script src='products.js' />

            {/* aqui estou renderizando desde los archivos que tengo, 
            y en el src no es necesario darle todo el path si no que le doy es el nombre
            no se le da el path gracias al imageprovider */}
            <Image className="demo-images__img" src="demo-image.jpg" alt="Mural painting" />

            <ul>
                {
                    products.length
                        ? products.map(p => (
                            <li key={p.id}>
                                <h5>{i18n.gettext(p.title)}</h5>
                                <a href={p.permalink}>
                                    <Image src={p.thumbnail} alt={p.title} lazyload="off" />
                                </a>
                            </li>
                        ))
                        : null
                }
            </ul>


        </>
    )

}

module.exports = injectI18n(View);