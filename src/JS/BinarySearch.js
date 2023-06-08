function binarySearch(hayStack, needle) {
    let start = 0;
    let end = hayStack.length - 1;
    do {
        let mid = Math.floor((end + start) / 2);
        if (hayStack[mid] === needle) {
            return true;
        }
        else if (hayStack[mid] < needle) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }

    }
    while (start < end);
    return false;

}

let sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sampleArray, 10));
console.log(binarySearch(sampleArray, 5));