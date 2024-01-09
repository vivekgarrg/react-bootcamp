// console.log(this);


//called in object
// const obj = {
//     name:"vivek",
//     age:20,
//     myFun: function(){
//         console.log(this);
//     },
//     // myFun2: ()=>{
//     //     console.log(this.name)
//     // }

// }

// obj.myFun();
// // obj.myFun2();


//normally called in outer 
// function vivek1(){
//     this.name = "vivek"
//     console.log(this.name);
// }
// vivek1()



//intanse examples:
// function vivek2(){
//     this.name = "vivek"
//     this.myFun =  function(){
//         console.log(this.name);
//     }
// }

// const normalFunction  = new vivek2();
// normalFunction.myFun();
// normalFunction.name = "abc";
// normalFunction.myFun()


// const arrow = ()=>{
//     console.log(this);
// }



//**arrow functions = >

// // Regular function as a method of an object
// const obj1 = {
//     name: 'Object 1',
//     regularFunction: function () {
//         console.log("Regular function:", this.name);
//     },
// };

// // Arrow function as a method of an object
// const obj2 = {
//     name: 'Object 2',
//     arrowFunction: () => {
//         console.log("Arrow function:", obj2.name);
//     },
// };

// // obj1.regularFunction();
// // obj2.arrowFunction();


// class Button {
//    constructor(){
//     this.name = "Button";
//    }
//     regularFunction () {
//         console.log(this)
//     }

//     arrowFunction = () =>{
//         console.log(this)
//     }
// }

// const button = new Button();

// button.regularFunction();
// button.arrowFunction();

// const obj = {
//     fun1:button.regularFunction,
//     fun2:button.arrowFunction
// }

// obj.fun1()
// obj.fun2()


var abc = "123";
console.log(regularFunction)
function regularFunction(){
    this.name = "vivek";
}

// console.log(arrowFunction)
// const arrowFunction = () =>{

// }


abc = "123";
regularFunction = regularFunction;