# safeauthjs

A lightweight and reusable authentication validation package for JavaScript and Node.js applications.

`safeauthjs` provides simple and clean validators for:

- Email validation
- Password validation

Built using modern ES Modules and designed for easy integration into backend and frontend applications.

---

# Installation

```bash
npm install safeauthjs
```

---

# Importing

```js
import {
    email_validator,
    password_validator
} from "safeauthjs"
```

---

# Email Validator

Validate email addresses using built-in checks.

## Example

```js
const result = emailValidator("naveen@gmail.com")

console.log(result)
```

## Successful Response

```js
{
    success: true,
    message: "The provided email successfully passed all validation checks",
    data: "naveen@gmail.com"
}
```

## Failed Response

```js
{
    success: false,
    message: "Email contains an unsupported top-level domain"
}
```

---

# Email Validation Rules

The email validator checks for:

- Valid `@` symbol usage
- Supported top-level domains (TLDs)
- Proper starting character
- Minimum email length
- No consecutive dots

---

# Password Validator

Validate passwords using modern security rules.

## Example

```js
const result = passwordValidator("Naveen@123")

console.log(result)
```

## Successful Response

```js
{
    success: true,
    message: "The provided password successfully passed all validation checks",
    data: "Naveen@123"
}
```

## Failed Response

```js
{
    success: false,
    message: "Password should contain an uppercase letter"
}
```

---

# Password Validation Rules

The password validator checks for:

- Minimum password length
- Uppercase letters
- Lowercase letters
- Numeric characters
- Special characters
- No white spaces

---

# Features

- Lightweight
- Reusable validation utilities
- Clean and consistent response objects
- Beginner-friendly API
- ES Module support
- No external dependencies

---

# Example Usage

```js
import {
    emailValidator,
    passwordValidator
} from "safeauthjs"

const emailResult = emailValidator("example@gmail.com")

const passwordResult = passwordValidator("Example@123")

console.log(emailResult)

console.log(passwordResult)
```

---

# Project Structure

```txt
safeauthjs/
│
├── validators/
│   ├── email_validator.js
│   └── password_validator.js
│
├── constants.js
├── index.js
├── package.json
├── README.md
└── LICENSE
```

---

# License

MIT License

---

# Author

Developed by FrndTech