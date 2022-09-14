function normalizer(array) {
    
    return array.map(e => e.buy_box_winner || e)
}

module.exports = normalizer;