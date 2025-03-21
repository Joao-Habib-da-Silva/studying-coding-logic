array1 = [1,2,3,4,5,6]
array2 = [4,5,7,8,9,2]
array3 = []
function sum() {
    for(var i = 0; i < array1.length; i++) {
        array3.push(array1[i]+array2[i])
    }
    console.log(array3)
}
sum()