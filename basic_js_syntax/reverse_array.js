function challenge2(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]); // Add elements in reverse order
    }
    return reversed;
}

console.log(challenge2([1, 2, 3, 4, 5])); 