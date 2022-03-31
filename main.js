console.log('------------- #5');

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask( "Вы согласны?",
    () => { console.log("Вы согласились."); }, 
    () => { console.log("Вы отменили выполнение."); }
  );
  
console.log('------------- #6');

let name = 'my-short-string';
let arr = name.split('-');
console.log(arr);

console.log('------------- #7');
let arr1 = ['JavaScript', 2015];
let str = arr1.join(' ');

console.log (str);

console.log('------------- #8');

let users = [
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}
];
let user = users.filter(item => item.age<20);
console.log (user);

console.log('------------- #9');

let names = users.map(item => item.name);
console.log( names ); 

console.log('------------- #10');
let arr2 = [5, 3, 8, 1];
function filterArr(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
filterArr(arr2, 1, 4);
console.log( arr2 ); 

console.log('------------- #11');
function abc(string, separator) {
   return string.split(separator);
}
let string = "name/age/hight/weight";
console.log(abc(string, '/'));

console.log('------------- #12');
let arr3 = [5, 3, 8, 1];
function slArray(arr, startIndex, endIndex){
    return arr.filter((item, index) => index >= startIndex && index <= endIndex)
}

let range = slArray(arr3, 1, 4);
console.log( range ); 
console.log( arr3 ); 

console.log('------------- #13');
function sum (...arg) {
    let result = 0;
    for (let i = 0; i < arg.length; i++) {
        result += arg[i];
    }
    return result;
}
console.log(sum(1,2,3,4,5,6,7,8));
