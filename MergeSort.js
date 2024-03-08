






function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] >= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    
    // Add remaining elements from leftArr and rightArr
    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [3, 4, 2, 5, 4, 6, 7, 8, 9, 4, 2, 3, 54];
const sortedArr = mergeSort(arr);

console.log(sortedArr);
