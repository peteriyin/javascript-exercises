const removeFromArray = function (givenArray, ...removedElem) {
    let result = givenArray.filter((item) => !removedElem.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
