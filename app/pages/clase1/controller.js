const React = require ('react');
const View = require ('./view');

exports.render = function  render (req, res) {
    const Clase1 = props => <View {...props}/>
    res.render (Clase1 , {
        messaje: 'Hola Todos'
    })
}