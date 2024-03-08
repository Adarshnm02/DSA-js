










function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap elements at i and minIndex
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

const arr = [13, 54, 3, 5, 67, 4, 3, 23, 5, 6];
selectionSort(arr);
console.log(arr);
