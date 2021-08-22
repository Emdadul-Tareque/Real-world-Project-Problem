// dui ta number1

const number1 = 10;
const number2 = 30;

const result = number1 + number2;
console.log(result);

const number1 = 40;
const number2 = 30;

const result = number1 + number2;
console.log(result);

function add(num1, num2) {
  const result = num1 * num2;

  return result;
}

const sum = add(10, 20);
console.log(sum);

console.log(add(10, 20));
console.log(add(30, 40));
console.log(add(50, 60));

/*
৩. [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। 

যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। 

যদি ২০০  এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 



এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে। 

আমার ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে। 


250 

100*100 + 100*80 + 50 * 50 = 

*/

function deliveryCost(amountOfOrder) {

  if (amountOfOrder < 0) {
    return "please give a number";
  } else if (typeof amountOfOrder == "string") {
    return "please give a number";
  } else {
    if (amountOfOrder <= 100) {
      const cost = amountOfOrder * 100;
      return cost;
    } else if (amountOfOrder > 100 && amountOfOrder <= 200) {
      const cost = 100 * 100 + (amountOfOrder - 100) * 80;
      return cost;
    } else if (amountOfOrder > 200) {
      const cost = 100 * 100 + 100 * 80 + (amountOfOrder - 200) * 50;
      return cost;
    }
  }
  
}

console.log(deliveryCost(-250));



/*---------------------------------------------------------
                        Solution of Problem no. 1
---------------------------------------------------------------- */

//declaring function
function seerToMon (numberOfSeer) {

  //error handling if input is a negative number
  if (numberOfSeer<=0)
  {
      return 'Seer cannot be less than or equal to 0.'
  }

  // 1 Mon = 40 Seer
  numberOfMon = numberOfSeer / 40;
  return numberOfMon;
}
//Printing the returned value of Mon where given Seer = 400//
console.log(seerToMon(400));




/*---------------------------------------------------------
                      Solution of Problem no. 2
---------------------------------------------------------------- */

//declaring function
function totalSales (numberOfShirt, numberOfPant, numberOfShoe)
{
  // Error handling if number of shirt, pant or shoe is negative.
  if(numberOfShirt < 0 || numberOfPant < 0 || numberOfShoe < 0 )
  {
      return "All the number of shirts, pants and shoes must be a positive integer. ";
  }    //Shirt price = 100, Pant price = 200, Shoe price = 500//
  costOfShirt = numberOfShirt * 100;
  costOfPant = numberOfPant * 200;
  costOfShoe = numberOfShoe * 500;

  //total cost of shirt, pant and shoe
  totalCost = costOfShirt + costOfPant + costOfShoe;
  return totalCost;
}

//passing parameter and printing the output
// giving input of 4 shirts, 3 pants and 2 shoes//
console.log(totalSales(4,3,2));


/*---------------------------------------------------------
                      Solution of Problem no. 3
---------------------------------------------------------------- */

tshirtCost = 0; 

//declaring function
function deliveryCost(numberOfTShirt)
{

  //Error handling.
  if(numberOfTShirt < 0)
  {
      return "Number of T-Shirt must be more than 0."
  }
  if(numberOfTShirt > 200)
  {
      tshirtCost = tshirtCost + 100 * 80;
      numberOfTShirt = numberOfTShirt - 100; 
      tshirtCost = tshirtCost + 100 * 100;
      numberOfTShirt = numberOfTShirt - 100; 
      tshirtCost = tshirtCost + (numberOfTShirt * 50);
  }
  else if(numberOfTShirt > 100 && numberOfTShirt < 201)
  {
      tshirtCost = tshirtCost + 100 * 100;
      numberOfTShirt = numberOfTShirt - 100;
      tshirtCost = tshirtCost + (numberOfTShirt * 80);
  }
  else if(numberOfTShirt < 101)
  {
      tshirtCost = tshirtCost + (numberOfTShirt * 100);
  }
  return tshirtCost;
}

//passing parameter and printing the output
console.log( deliveryCost(500) );


/*---------------------------------------------------------
                      Solution of Problem no. 4
---------------------------------------------------------------- */

//declaring function
function perfectFriend (friendNames)
{
   //error handling-1
   //names of friend must be an array, it can't be just a single integer or string.
  if( typeof friendNames != 'object')
  {
      return "You have to take an array.";
  }

  //error handling-2
   //all the names of friend must be taken as string in an array.
  for(i=0; i<friendNames.length ; i++)
  {
      if(typeof friendNames[i] != 'string')
      {
          return "Please take all the inputs as string in the array.";
      }
  }
  for (const friend of friendNames)
  {
      // checking which element's length is 5
      if(friend.length == 5)
      {
          return friend;
      }     
  }
}
let friendNames = ['Akib', 'Pranto', 'Raiyan', 'Alif', 'Sakib', 'Rony', 'Robin'];
console.log(perfectFriend(friendNames));



// programming hero --> duita string jog korbo // concatenate korbo 

//

const firstName = "Programming"

const lastName = "hero"

const fullName = firstName + lastName;

console.log(fullName)