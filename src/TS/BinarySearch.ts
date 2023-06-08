function Binary_Seach(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

const sampleArrayTS: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(Binary_Seach(sampleArrayTS, 5));
console.log(Binary_Seach(sampleArrayTS, 10));