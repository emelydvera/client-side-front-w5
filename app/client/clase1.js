const React = require('react');
const hydrate = require('nordic/hydrate');
const Clase1View = require ('../pages/clase1/view');

const { messaje } = window.__PRELOADED_STATE__;

hydrate(
    <Clase1View
        messaje={messaje}
    />, document.getElementById('root-app')
)