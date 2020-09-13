let myObj = {
    name: "Sarfaraz",
    age: 26,
    address: "Karachi"
}

let objeConverttoString = JSON.stringify(myObj)
sessionStorage.setItem("myObj", objeConverttoString)
// let myObjConvertoObj = JSON.parse(localStorage.getItem("myObj"))

// console.log(myObjConvertoObj)
console.log(myObj)

// console.log(myObjConver)