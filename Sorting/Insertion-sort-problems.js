
















//Write a function to sort an array of integers in desending order using the Insertion Sort algorithm.

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


let arr = [3,5,2,6,8,56,8,7,5]

insertionSort(arr);

console.log(arr);



