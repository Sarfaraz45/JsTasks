let myObj = {
    name: "Sarfaraz",
    age: 26,
    address: "Karachi"
}

let myObjConver = JSON.stringify(myObj)
localStorage.setItem("myObj", myObjConver)
let myObjConvertoObj = JSON.parse(localStorage.getItem("myObj"))

// console.log(myObjConvertoObj)
console.log(myObj)

// console.log(myObjConver)