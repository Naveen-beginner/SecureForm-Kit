# secureformjs

A lightweight and reusable form validation package for JavaScript and Node.js applications.

`secureformjs` provides simple, clean, and beginner-friendly validators for:

- Email validation
- Password validation

Built using modern ES Modules and designed for seamless integration into both frontend and backend applications.

---

# Installation

```bash
npm install secureformjs
```

---

# Importing

```js
import {
  emailValidator,
  passwordValidator
} from "secureformjs"
```

---

# Email Validator

Validate email addresses using built-in validation rules.

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

- Proper `@` symbol usage
- Supported top-level domains (TLDs)
- Valid starting character
- Minimum email length
- No consecutive dots
- Basic email formatting standards

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

- Lightweight and fast
- Reusable validation utilities
- Clean and consistent response objects
- Beginner-friendly API
- Modern ES Module support
- No external dependencies
- Frontend and backend compatible

---

# Example Usage

```js
import {
  emailValidator,
  passwordValidator
} from "secureformjs"

const emailResult = emailValidator("example@gmail.com")

const passwordResult = passwordValidator("Example@123")

console.log(emailResult)

console.log(passwordResult)
```

---

# Project Structure

```txt
secureformjs/
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
Developed and maintained by FrndTech