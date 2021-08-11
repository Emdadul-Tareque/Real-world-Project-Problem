//create a rectangular object

function createRectangleObject(a, b) {
    let rectangle = new Object();
    rectangle.length = a;
    rectangle.width = b;
    rectangle.perimeter = 2 * a + 2 * b;
    rectangle.area = a * b;

    return rectangle;
}


//count object 

function getCount(objects) {
    let count = 0
    for (let o of objects) {
        console.log(o.x)
        if (o.x === o.y) count++
    }
    
    return count
}
console.log(getCount([{h:1, i:1}, {h:2, i:3}]))

const arr = [2, 3, 6, 6, 5]

const sortedArr = arr.sort()
console.log(sortedArr)

const unique = []

for(let i = 0; i <= sortedArr.length; i++){
    unique.indexOf(sortedArr[i]);
    if(unique.indexOf(sortedArr[i]) == -1){
        unique.push();
    }
}
console.log(unique)

// console.log(sortedArr[(sortedArr.length)-2])