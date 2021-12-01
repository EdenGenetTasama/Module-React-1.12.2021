// const myName = "Eden" ;

// function printingMyName(name){
//     console.log(name +" Tasama");
// }

// // printingMyName()
// // export default myName;

// export {myName ,printingMyName } ;

///הגדר משתנה מסוג מספר ויצא אותו בעזרת export default.

// const numberOne = 18;

// export default numberOne;

//הגדר משתנה מסוג טקסט ויצא אותו בעזרת export default.

// const textOne= "Eden Genet Tasama";
// export default textOne;

//הגדר משתנה מסוג אובייקט ויצא אותו בעזרת export default.

// const objOne= {
//     name:"Eden Genet",
//     lastN: "Tasama",
//     age: 25,

// }

// export default objOne;

//הגדר משתנה מסוג מספר, אובייקט, בוליאני וטקסט ויצא את כולם.

const numberTwo = 5;
const objTwo = {
  name: "Eden Genet",
  lastN: "Tasama",
  age: 25,
};
const boolOne = true;
const textTwo = "Love";

function returnSumArray(array) {
  let sumOfArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfArray += array[i];
  }
  return sumOfArray;
}

// export default returnSumArray;
export default {numberTwo , objTwo ,boolOne,textTwo,returnSumArray} ;
