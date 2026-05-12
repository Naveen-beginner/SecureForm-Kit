import {
    emailValidator,
    passwordValidator
} from "./index.js"

console.log("========== EMAIL VALIDATION TESTS ==========\n")

const emailTests = [
    "naveen@gmail.com",
    "invalidemail",
    "hello@domain",
    "user..name@gmail.com",
    "@gmail.com"
]

emailTests.forEach((email) => {
    console.log(`Testing Email: ${email}`)
    console.log(emailValidator(email))
    console.log("-----------------------------------")
})

console.log("\n========== PASSWORD VALIDATION TESTS ==========\n")

const passwordTests = [
    "Naveen@123",
    "password",
    "PASSWORD123",
    "Pass123",
    "NoSpecialChar123",
    "Invalid Password@1"
]

passwordTests.forEach((password) => {
    console.log(`Testing Password: ${password}`)
    console.log(passwordValidator(password))
    console.log("-----------------------------------")
})