// //localStorage.setItem('fName', "Faraz");

// localStorage.setItem('myObje', {'nam':'faraz', 'age': 34});


// localStorage.setItem('lName', "Ali")

// // let fName = localStorage.getItem('fName')
// // let lName = localStorage.getItem('lName')

// let myObje = localStorage.getItem('myObje')

// console.log(myObje)

// localStorage.removeItem('fName')

// // localStorage.clear()

// console.log(localStorage.length)


/*Task 1

let myObj = {
    name: "Sarfaraz",
    age: 26
}

let myObjConver = JSON.stringify(myObj)
localStorage.setItem("myObj", myObjConver)
let myObjConvertoObj = JSON.parse(localStorage.getItem("myObj"))

console.log(myObjConvertoObj)

console.log(myObjConver)*/


// sessionStorage.setItem("myValue", "This is my Value");
// sessionStorage.setItem("myValu1", "this is second value")

// let value1 = sessionStorage.getItem("myValue")
// sessionStorage.clear()

// //sessionStorage.removeItem("myValue")
// console.log(value1)


// let myArray = ["haseeb", "huma", "hunain"]

// // let [firstName, secondName, thirdName] = myArray

// // console.log(firstName, secondName, thirdName)

// let [,secondValue,thirdValue] = myArray

// console.log(secondValue)


// let myObj = {
//     firstName: "Sarfaraz",
//     lastName: "ali",
//     age: 31
// }

// let {age: newAge}  = myObj
// console.log(newAge)


/*Task 2 ----------------------------------------------------------
let myObj = {
    firstName: "Sarfaraz",
    lastName: "Ali",
    age: 31,
    address: {
            address1: "Karachi",
            address2: "Lahore"
    }
}

let {address: {address1, address2:newAddress}}=myObj

console.log(address1, newAddress)

Task2 ----------------------------------------------------------------*/

// let myObj = {
//     firstName: "Saifi",
//     lastName: "Ali"
// }

// // let mySeconndObj = myObj


// let mySecondObj = {
//     ...myObj
// };  

// mySecondObj.lastName = "Ahmed"

// console.log("my Fist Obj ======================>", myObj)
// console.log("mySecondObj ======================>", mySecondObj)

// console.log(mySeconndObj)

// let myObj = {
//     firstName: "Sarfarz",
//     lastname: "Ali"
// }

// let mySecondObj = {
//     ...myObj,
//     lastname: "aliiii"
// }

// console.log("my Fist Obj ======================>", myObj)
// console.log("mySecondObj ======================>", mySecondObj)


let myObj = {
    firstName: "Sarfaraz",
    lastName: "Ali",
    address: {
        address1: "Karachi",
        address2: "Lahore"
    }
}


let mySecondObj = {
    ...myObj,
    lastName: "Ahmed",
    address:{
        address1: "Islamabad"
    }
}

console.log("my Fist Obj ======================>", myObj)
console.log("mySecondObj ======================>", mySecondObj)
