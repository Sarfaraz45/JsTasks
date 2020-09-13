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
// console.log(myObj)
