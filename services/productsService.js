/**
 * Implementar un servicio que tenga un método estático llamado `getProducts`,
 * el cual tiene recibe dos parámetros: siteId y el nombre nombre de un producto.
 * Restclient va a hacer una request a la ruta `/sites/${siteId}/search`.
 * 
 * Comando para correr el test: `npm run test:unit:watch products-service`
 */
const restclient = require('nordic/restclient')({
  timeout: 5000,
});

const normalizer = require('./transforms/normalizarProductos')

class ProductsService {

  static getProducts(siteID, q, limit, offset) {
    return restclient.get(`/sites/${siteID}/search`,
      {
        params: {
          q, limit, offset
        }
      })
      .then(res => normalizer(res.data.results))
      .catch(() => [])
  }
}

module.exports = ProductsService;
