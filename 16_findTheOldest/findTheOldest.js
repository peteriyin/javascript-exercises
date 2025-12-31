const findTheOldest = function (arr) {
    return arr.reduce((acc, curr) => {
        if (((curr.yearOfDeath || new Date().getFullYear()) - curr.yearOfBirth) > ((acc.yearOfDeath || new Date().getFullYear()) - acc.yearOfBirth)) {
            return curr;
        };
        return acc;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
