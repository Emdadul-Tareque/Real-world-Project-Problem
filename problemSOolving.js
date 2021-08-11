/*
১) মনে করো  একটা Array  ভিতরে এলিমেন্ট হিসেবে object থাকবে। তোমার কাজ হচ্ছে একটা ফাংশন লেখা যে ফাংশনের কাজ হচ্ছে কোন একটা Array কে সে ইনপুট হিসেবে নিবে সেই Array ভিতরে object থাকলে সেই objectের প্রপার্টি ও ভ্যালুকে এক্সেস করে তা array আকারে পাঠাবে। 
*/

const persons = [
  {
    name: "programming",
    id: "100",
  },
  {
      name: "Hacking",
      id: "200"
  },
  {
      name: "toto company",
      id: "500"
  }
];

function getObjectValues(persons){
   
    const objectValue = [];

    for(let i = 0; i < persons.length; i++){
        let text = "";
        const element = persons[i];

        for(let property in element){

            text += property + " : " + element[property]+" "

        }
        objectValue.push(text);

    }

    return objectValue;




}
console.log(getObjectValues(persons));





let text = "hello"

text  += " world";

console.log(text);
