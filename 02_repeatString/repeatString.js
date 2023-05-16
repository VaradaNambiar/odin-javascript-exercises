const repeatString = function (str, num) {
    if (str == "")
        return str
    let result = ""
    if (num >= 0) {
        for (let iter = 0; iter < num; iter++) {
            result += str
        }
    }
    else {
        result = "ERROR"
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
