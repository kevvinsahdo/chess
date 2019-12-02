const toLower = (value) => {
    return value.toLowerCase();
}

const toUpper = (value) => { 
    return value.toUpperCase(); 
}

const isEqual = (value1, value2) => {
    return value1 == value2;
}

module.exports = { toLower, toUpper, isEqual };