let sayHello = function(name) {
    console.log(`Greeting message for ${name}`)
    console.log(`Hey ${name}`)
}

sayHello("Prince")


// Default Function

let sayHello1 = function(name = "Null") {
    console.log(`Greeting message for ${name}`)
    console.log(`Hey ${name}`)
}

sayHello1()