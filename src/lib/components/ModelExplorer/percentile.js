const getPercentile = function ( quantiles, value ) {
    if (value == null) value = 0;
    for (let i = quantiles.length; i > 0; i--) {
        if (value >= quantiles[i-1]){
            return i;
        }
    }
    return 1;
};

export {
    getPercentile
}