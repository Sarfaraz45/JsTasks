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