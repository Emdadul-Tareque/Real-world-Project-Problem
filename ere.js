// Problem No 1

function seerToMon(Weight){
    const mon = 40;
    let seer = Weight;
    const result = seer / mon;
    return result;

}
const input = seerToMon(160);
console.log(input);

// Problem No 2

function totalSales(cart){
    let totalPrice = 0;
    for(let product of cart){
        const productPrice = product.Price * product.Quantity;
        totalPrice = totalPrice + productPrice;
    }
    return totalPrice;
}
const output = totalSales([
    { Name: 'T-Shirt', Price: 100, Quantity: 10},
    { Name: 'Pant', Price: 200, Quantity: 5},
    { Name: 'Shoes', Price: 500, Quantity: 2}
])
console.log(output);

// Problem No 3

function deliveryCost(product){
        const firt100Tshirt = 100;
        const second100Tshirt = 80;
        const moreThanTwoHundred = 50;
        if(product <= 100){
            const totalCost = product * firt100Tshirt;
            return totalCost;
     }
    
        else if ( product <= 200){
            const first100item = 100 * firt100Tshirt;
            const restProducts = product - 100;
            const second100item = restProducts * second100Tshirt; 
            const totalCost = first100item + second100item;
            return totalCost;
     }
        else{
            const first100item = 100 * firt100Tshirt;
            const second100item = 100 * second100Tshirt; 
            const restProducts = product - 200;
            const above200Products = restProducts * moreThanTwoHundred;
            const totalCost = first100item + second100item + above200Products;
         return totalCost;
     }
 }
    
    const productsItem = deliveryCost(250);
    console.log(productsItem);

    
// Problem 4

    function perfectFriend (myAllFriend){
        for (var i=0; i<myAllFriend.length; i++){
            const element = myAllFriend [i];
            if (element.length ==5){
                return element;
            }
        }
    }

    const MyFriends  = ['Rezvi', 'Rayhan', 'Salam', 'Kamal', 'Rakib', 'Farjana', 'Alamin', 'Sumon', 'Remon', 'Sabbir', 'Sajal']
    let MyFriendsname= perfectFriend(MyFriends);
    console.log(MyFriendsname);









 
  




// type: 1
console.log()
console.log("Start from Here")
console.log("Type: 1")
console.log("1 --> ", seerToMon(40)); // 1
console.log("10000 --> ", totalSales(5, 10, 15)); // 10000
console.log("10080 --> ", deliveryCost(101)); // 10080
console.log("abcde --> ", perfectFriend(["abcde", "abcdef", "abc"])); 
console.log()

//type: 2
console.log("Type: 2")
console.log("2.5 --> ",seerToMon(100)); // 2.5
console.log("6000 --> ", totalSales(15, 10, 5)); // 6000
console.log("18050 --> ", deliveryCost(201)); // 18050
console.log("abcde or abcdf --> ", perfectFriend(["abcdef", "abcde", "abcdf", "abc"])); // perfectFriend(["abcdef", "abcde", "abcdf", "abc"])
console.log()

// type: 3
console.log("Type: 3 for negative value validation")
console.log("Negative value not allowed --> ", seerToMon(-100)); // Negative value not allowed
console.log("Negative value not allowed -->", totalSales(-1, -1, -1)); // Negative value not allowed
console.log("Negative value not allowed -->", deliveryCost(-201)); // // Negative value not allowed

//type: 4 
console.log("Type: 3 for string validation")
console.log("Negative value not allowed --> ", seerToMon("10")); // Negative value not allowed
console.log("Negative value not allowed -->", totalSales("")); // Negative value not allowed
console.log("Negative value not allowed -->", deliveryCost(-201)); // // Negative value not allowed


// const arr = [1, 2, 3, 4, 5,  6, 15, 17, 23, 11, 21, 10, 28, 35, 26, 32, 31, 37, 13, 22]

// function sort(arr){

//     const length = arr.length

//     for(let i= 0; i < length; i++){
//         for(j = 0; j < length-i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }

//     return arr;

// }

// console.log(sort(arr))







// console.log("Problem No: 01");
// if (
//   seerToMon(40) == 1 &&
//   seerToMon(100) == 2.5 &&
//   typeof seerToMon(-10) == "string"
// ) {
//   console.log("all answer right & Validated");
// } else if (seerToMon(40) == 1 && seerToMon(100) == 2.5 && seerToMon(-10) < 0) {
//   console.log("all answer right but not Validated");
// } else if(seerToMon(40) != 1 || seerToMon(100) != 2.5 && seerToMon(-10) < 0){ 
    
//     console.log("all answer not correct but doing Validation");
// }


// jog korte hobe 

// ki korte hobe 

//kibhabe korbo 

const num1 = 10;
const num2 = 5; 

const result = num1 + num2;

console.log(result);