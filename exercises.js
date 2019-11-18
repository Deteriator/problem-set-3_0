const isRealPalindrome = function(str){
  let strippedWord = str.toLowerCase().split('').filter(char => char.match(/[a-z0-9]/)).join('');
  return strippedWord.split("").reverse().join("") === strippedWord;
};
const runningTotal = function(arr) {
  let sum = 0;//starting number
  if(Array.isArray(arr)){
    let total = arr.map(currentValue => {
      return sum += currentValue;
    });
    return total;
}
    //takes starting ex: 2 
    //adds to 0 and is new value now its the sum of original values plus the new
  return [];
};
    
const swap = function(str) {
  let newStr = "";
  str = str.split(" ");
  str.forEach((value,index)=>{
    let newVal= value[0];
      value = value.split("");
      value[0] = value[value.length - 1];
      value[value.length - 1] = newVal;
      newStr += `${value.join("")} `;
  });
   newStr = newStr.substring(0, newStr.length - 1);
  return newStr;
};
      
const wordSizes = function(str) {
    str = str.split(" ");
    let sizes = {};
    console.log(str);
    str.forEach((currentValue) =>{
        if(sizes.hasOwnProperty(`${currentValue.length}`)){
          sizes[`${currentValue.length}`] += 1;
        }
        else{
        sizes[`${currentValue.length}`]  = 1;
        }
    });
    return sizes;
};
      
const union = function(arr1, arr2) {
  let addedArr = [];
    arr1.forEach((item)=>addedArr.push(item));
    arr2.forEach((item)=>addedArr.push(item));
   let newArr = addedArr.filter(function (item, repeat){
     return addedArr.indexOf(item) == repeat;
   });
 return newArr;
};
const firstRecurring = function(str) {
    let count = {};
    for(let char of str){
        if(char in count){
            return char;
        } else {
            count[char] = 1;
        }
    }
    return "";
};
      
const showMultiplicativeAverage = function(arr) {
  let divider = arr.length;
   let total = arr.reduce((sum,value) => {
      return sum * value;
    });
    return (total/divider).toFixed(3);
};

      
const multiplyList = function(arr1, arr2) {
  let arr =[];
  arr1.forEach(function(value,i){
     arr.push(arr1[i] * arr2[i]);
  });
  return arr;
};
      
const sequence = function(num) {
  let arr =[],count = 1;
  while(count <= num){
  arr.push(count);
  count++;
  }
  return arr;
};
      
const wordCap = function(str) {
  let newStr ="";
  str = str.toLowerCase().split(" ");
  str.forEach((value,index)=>{
    value = value.split("");
    value[0] = value[0].toUpperCase();
    newStr += `${value.join("")} `;
  });
   newStr = newStr.substring(0, newStr.length - 1);
  return newStr;
};


// The below code connects this JS fil to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
  wordCap,
};
