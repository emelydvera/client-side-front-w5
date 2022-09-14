const router = require('nordic/ragnar').router();
const ProductsService = require('../services/productsService')
/**
 * Ejercitación 1
 * 
 * Aquí deberás crear el endpoint con el método GET, el cual consuma
 * el servicio que devuelve los productos de la API de MeLi.
 * 
 * Comando para correr el test: `npm run test:unit:watch get-products`
 */
router.get('/', (req, res) => {
    const { q, offset, limit } = req.query;
    ProductsService.getProducts('motorola', 5, 10)
        .then(data => res.json(data))
        .catch(() => [])
})

module.exports = router;
