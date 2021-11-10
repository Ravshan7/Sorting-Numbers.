
function random() {
    return Math.round(Math.random() * 100)
}

function min(arr, idx) {
    let min = arr[idx]
    let index = idx
    for (let i = idx + 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
            index = i
        }
    }
    return index
}

function swap(arr, i, min) {
    let c = arr[min] 
    arr[min] = arr[i]
    arr[i] = c
}


const array = new Array(10).fill('').map(() => random())
console.log(array);


for (let i = 0; i < array.length; i++) {
    let minArr = min(array, i)
    swap(array, i, minArr)
}

console.log(array);

