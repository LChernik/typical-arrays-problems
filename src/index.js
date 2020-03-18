
exports.min = function min (array) {
    if (!!array && array.length > 0) {
        let min = Math.min(...array)
        return min;
    }
    return 0
}

exports.max = function max (array) {
    if (!!array && array.length > 0) {
        let max = Math.max(...array)
        return max;
    }
    return 0
}

exports.avg = function avg (array) {
    if (!!array && array.length > 0) {
        let sum = array.reduce(function (a,b) { return a+b},0);
        let average = sum/array.length;
        return average;
    }
  return 0;
}
