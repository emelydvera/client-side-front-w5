const normalizer = require('./transforms/normalizarProductos');
const restclient = require('nordic/restclient')({
    timeout: 5000
});

class ServiceProductList {
    static getProducts(siteID, q='tablet', limit=10, offset=0) {
        return restclient.get(`/sites/${siteID}/search?`,
            {
                params: {
                    q, limit, offset
                }
            })
            .then(res => normalizer(res.data.results))
            .catch(err => console.log(err))
    }
}

module.exports = ServiceProductList;