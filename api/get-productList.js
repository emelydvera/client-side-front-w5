const router = require('nordic/ragnar').router();
const ProductsService = require('../services/productListService');

router.get('/', (req, res) => {
    const { siteId } = req.platform
    const { q, limit, offset } = req.query;
    ProductsService.getProducts(siteId, q, limit, offset)
        .then(data => res.json(data))
        .catch(() => [])
})

module.exports = router;