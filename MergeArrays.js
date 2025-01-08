function mergeArrays(...arrays) {
    return [].concat(...arrays);
}

// Example usage:
const result = mergeArrays([1, 2], [3, 4], [5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]
