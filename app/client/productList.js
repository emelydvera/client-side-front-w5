const React = require('react');
const hydrate = require('nordic/hydrate');
const ProductListView = require('../pages/productList/view');

const {
    products, q, limit
} = window.__PRELOADED_STATE__;


hydrate(

    <ProductListView
        products={products}
        q={q}
        limit={limit}
    />

    , document.getElementById('root-app'),
);