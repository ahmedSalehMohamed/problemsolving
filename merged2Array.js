const mergedArray = (arr1, arr2) => {
    let merged=[...arr1,...arr2]
    return merged;
}
module.exports = { mergedArray };