// && - AND Operator - Both side need to be true
// || - OR Operation - One side need to be true

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken){
    console.log("Greeting msg to user")
    console.log("Grant access to paid courses")
} else if (isVerified || isGuest){
    console.log("Allow free previews")
}else {
    console.log("MESSAGE : please contact admin")
}