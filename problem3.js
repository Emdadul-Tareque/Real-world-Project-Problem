/*

৩) মনে করো তুমি একটা ই-কমার্স ওয়েব সাইট বানাইছো। তোমার কাছে প্রডাক্টগুলো আছে সেগুলো কাস্টমার অর্ডার করার পর  ইনফরমেশনগুলো (যেমনঃ কাস্টমারের নাম, প্রোডাক্টের নাম,  কোয়ান্টিটি এবং অর্ডারের তারিখ ) ডাটাবেজে object আকারে সেভ করে রেখেছ। 
এখন তোমার কাজ হচ্ছে তুমি একটা ফাংশন লিখবা যেই ফাংশনের কাজ হচ্ছে সে ইনপুট আকারে অর্ডারের তারিখ নিবে এবং সে ঐ object থেকে যে যে প্রডাক্ট ইনপুট হিসেবে যে তারিখ নিয়েছে সেই দিন কি কি প্রোডাক্ট অর্ডার হয়েছে তা Array আকারে রিটার্ন করবে। 

*/

const orderList = [
    {
        customerName: "Rasel",
        productName: "Laptop",
        quantity: 2,
        date: "11-08-2021"

    },
    {
        customerName: "Tareque",
        productName: "Microphone",
        quantity: 1,
        date: "10-08-2021"

    },
    {
        customerName: "Emdadul",
        productName: "Monitor",
        quantity: 1,
        date: "11-08-2021"
    }
]


function getOrderInfo(date){
    const orders = [];
    for(let i = 0; i < orderList.length; i++){
        const object = orderList[i];
        for(let property in object){
            if(property == "date" && object[property] == date){
                orders.push(object)
            }
        }
    }

    return orders;

}

console.log(getOrderInfo("11-08-2021"))