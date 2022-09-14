const React = require ('react');
const Script= require ('nordic/script');
const serialize = require('serialize-javascript');


function View(props) {
    
    const [count, setCount] = React.useState(0);

    const {messaje}= props;

    const preloadedState ={
        messaje
    }

    const handleAdd = () => {
        console.log('Sumé');
        setCount(count => count + 1);
    }

    const handleSubtract = () => {
        console.log('Resté');
        setCount(count => count - 1);
    }

    return (
        <>
            <Script>
                {`
                    window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
                    console.log('Clase1 page is loaded!');
                `}
            </Script>
            <Script src = 'vendor.js'/>
            <Script src ='clase1.js'/>
            <h2>{messaje}</h2>

            <button onClick={handleSubtract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
        </>
    )
}
module.exports= View; 
