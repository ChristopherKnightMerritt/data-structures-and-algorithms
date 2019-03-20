function shiftArray(arr, x){
    let res = [];
    let mid = Math.ceil(arr.length/2)-1;

    for(let i = 0; i < arr.length; i++){
        if(i < mid){
            res[i] = arr[i];
        }
        if(i === mid){
            res[i] = arr[i];
            res[i + 1] = x;
        }
        else{
            res[i + 1] = arr[i];
        }
    }
    return res;
}