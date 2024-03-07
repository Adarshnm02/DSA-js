//Write a function to sort an array of integers using the bubble sort algorithm 


function bubbleSort(arr){
    let swapped

    do{
        swapped = false
        for(let i =0; i< arr.length;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
}


// Bubble Sort implementation to sort the array in descending order.



function bubbleSortDec(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0; i< arr.length; i++){
            if(arr[i] < arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
}

//Implement a version of Bubble Sort that can sort an array of strings in lexicographical order.



function bubbleSortStr(str){
    let swapped
    do{
        swapped = false
        for(let i = 0;i< str.length; i++){
            if(str[i] > str[i+1]){
                let temp = str[i]
                str[i] = str[i+1]
                str[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
}




//Extend your Bubble Sort implementation to handle cases where the array contains duplicate values.

function bubbleSortDuplicat(arr){
    let swapped
    let len = arr.length
    do{
        swapped = false
        for(let i = 0; i < len; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }else if(arr[i] === arr[i+1]){ 
                for(let j = i;i< len;i++){
                    arr[i] = arr[i+1]
                }
                len--
                swapped = true
            }
        }
    }while(swapped)

    return arr
}








const arr = [3,6,2,1,5,8,7,4,10,9]
const str = ['zoom', 'click', 'apply', 'boost', 'focous']
const dupArr = [1,2,4,2,1,5,6,5,2,2,1]


// bubbleSort(arr)
// bubbleSortDec(arr)
// bubbleSortStr(str)
// bubbleSortDuplicat(dupArr)



// console.log(arr);
// console.log(str)
// console.log(dupArr);





