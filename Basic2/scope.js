let iAmGlobal = "someValue"

if(true){
    var iAmLocal = "someLocalValue"
    console.log(iAmGlobal)
    console.log(iAmLocal)
}

console.log(iAmLocal)