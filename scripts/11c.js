function arraySwap(array)
{
    let firstVal = array[0];
    let lastVal = array[array.length-1];
    let temp = firstVal;
    array[0] = lastVal;
    array[array.length-1] = temp;
    return array;
}