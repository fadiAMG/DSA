function bubbleSort(array) {
    for (let i = 0; i < array.length; ++i) {
        for (let j = 0; j < array.length - i - 1; ++j) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let sampleArray = [234, 43, 55, 63, 5, 6, 235, 547, 1555, 20, 37]
console.log("BubbleSorted", bubbleSort(sampleArray))