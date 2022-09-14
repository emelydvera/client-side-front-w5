const React = require('react');
const { useEffect, useState } = React
const restclient = require('nordic/restclient')({
    timeout: 5000,
    baseURL: '/api'
});
const Image = require('nordic/image');
const serialize = require('serialize-javascript');
const Script = require('nordic/script');

function View(props) {

    const { products, q, limit } = props;
    const preloadedState = {
        products, q, limit
    }

    const [data, setData] = useState(products);
    const [offset, setOffset] = useState(0);


    const handleClick = () => {
        setOffset(offset => offset + 10)
    }

    useEffect(() => {
        if (offset > 0) {

            restclient.get('/get-productList', {
                params: {
                    q: q,
                    limit,
                    offset
                }
            })
                .then(res => setData(res.data))
                .catch(() => [])
        }

    }, [offset]);

    return (
        <>
            <Script>
                {`
                    window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
                    console.log('Page is loaded!');
                `}
            </Script>
            <Script src='vendor.js' />
            <Script src='productList.js' />

            <button onClick={handleClick}>Siguiente Página</button>
            <ol>
                {
                    data.length > 0 ?

                        data.map(e => {
                            return (

                                <li key={e.id}>
                                    <h3>{e.title}</h3>
                                    <p>{e.price}</p>
                                    <a href={e.permalink}>
                                        <Image src={e.thumbnail} alt={e.title} lazyload="off" />
                                    </a>
                                </li>

                            )
                        })
                        :
                        <p>No se encontraron productos</p>
                }
            </ol>

        </>
    )
};


module.exports = View;