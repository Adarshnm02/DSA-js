














function quickSort(arr){
    if(arr.length < 2 ){
        return arr
    }

    let pivet = arr[arr.length-1]
    let left = []
    let right = []
    for (let i = 0;i<arr.length-1; i++){
        if(arr[i] < pivet){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivet, ...quickSort(right)]
}


let arr = [1,4,3,2,5,4,6,7,5,4,6,78,54]

quickSort(arr)
console.log(arr);