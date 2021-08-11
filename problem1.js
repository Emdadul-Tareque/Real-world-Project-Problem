// const person = { name: "emdadul", age: "25" };
// const arr = [];
// let text = "";
// for (let value in person) {
//   text += person[value] + " ";
// }
// arr.push(text);

// console.log(arr);

const persons = [
  { name: "emdadul", age: "25" },
  { name: "hoque", age: "24" },
];

var arr = [];

for (let i = 0; i < persons.length; i++) {
 
  let text = "";
  const element = persons[i];
  for (value in element) {
    text += element[value] + " ";

  }
  arr.push(text);
}

console.log(arr);

const order = [
    {
        customerName : "emdadul",
        productName : "Laptop",
        Quantity : "2",
        date : "02-08-2021"
        
    },
    {
        customerName : "hoque",
        productName : "microphone",
        Quantity : "5",
        date : "04-08-2021"
        
    },
    {
        customerName : "Tareque",
        productName : "monitor",
        Quantity : "1",
        date : "02-08-2021"
        
    }
]



function orderList(date){
    const orders = [];
    for(let i = 0; i<=order.length;i++){
        const element = order[i];
        for(let value in element){
            if(value == "date" && element[value] == date){
                orders.push(element);
            }
        }
    }

    return orders;

}

console.log(orderList("02-08-2021"))