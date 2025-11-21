const repeatString = function (string, num = Math.floor(Math.random) * 1000) {
    let newString = string;
    if (num === 0 || string == '') {
        return ''
    }
    if (num < 0) {
        return 'ERROR'
    };
    for (let i = 1; i < num; i++) {
        newString += string;
    };
    return newString;
};
// Do not edit below this line
module.exports = repeatString;
