const palindromes = function (words) {
    let count = "";
    for (let i = words.length - 1; i >= 0; i--) {
        count += words[i]
    }
    return words.toLowerCase().
        split(", ").
        join("").
        replace(/[^a-zA-Z0-9]/g, '') === count.toLowerCase().
            split(", ").
            join("").
            replace(/[^a-zA-Z0-9]/g, '')
};

// Do not edit below this line
module.exports = palindromes;
