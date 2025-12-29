const sumAll = function (x, y) {
    if (x < 0 || y < 0) return 'ERROR';
    else if (!Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR'
    let i = 0;
    for (let min = Math.min(x, y); min <= Math.max(x, y); min++) {
        i += min;
    };
    return i;
};

// Do not edit below this line
module.exports = sumAll;
