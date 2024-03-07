//Write a function to sort an array of integers using the Insertion Sort algorithm.

function insertionSort(arr){
    for(let i = 0;i<arr.length;i++){
        let numToInsert = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > numToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numToInsert
    }
}


let arr = [2,3,2,4,1,5,4,6,7]

insertionSort(arr);

console.log(arr);