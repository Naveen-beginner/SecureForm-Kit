import {
    errorMessages,
    successMessages,
    utilities
} from "../constants.js"

const passwordValidator = (password) => {

    // Basic safety check
    if (!password || typeof password !== "string") {
        return {
            success: false,
            message: "Invalid password"
        }
    }

    // Store validation results
    const minLength = hasMinLength(password)
    const upperCase = hasUpperCase(password)
    const lowerCase = hasLowerCase(password)
    const numeric = hasNumeric(password)
    const specialChar = hasSpecialChar(password)
    const emptyChar = hasEmptyChar(password)

    // Return first failed validation
    if (!minLength.success) return minLength

    if (!upperCase.success) return upperCase

    if (!lowerCase.success) return lowerCase

    if (!numeric.success) return numeric

    if (!specialChar.success) return specialChar

    if (!emptyChar.success) return emptyChar

    // Final formatted password
    return formatPassword(password)
}

// MIN_PASSWORD_LENGTH required for password
const hasMinLength = (password) => {

    if (password.length === 0) {
        return {
            success: false,
            message: "Please enter a password"
        }
    }

    if (password.length >= utilities.MIN_PASSWORD_LENGTH) {
        return {
            success: true
        }
    }

    return {
        success: false,
        message: `Password should contain at least ${utilities.MIN_PASSWORD_LENGTH} characters`
    }
}

// At least one uppercase letter
const hasUpperCase = (password) => {

    const regex = /[A-Z]/

    if (!regex.test(password)) {
        return {
            success: false,
            message: errorMessages.UPPER_CASE_CHAR_MISSING_ERROR
        }
    }

    return {
        success: true
    }
}

// At least one lowercase letter
const hasLowerCase = (password) => {

    const regex = /[a-z]/

    if (!regex.test(password)) {
        return {
            success: false,
            message: errorMessages.LOWER_CASE_CHAR_MISSING_ERROR
        }
    }

    return {
        success: true
    }
}

// At least one numeric character
const hasNumeric = (password) => {

    const regex = /[0-9]/

    if (!regex.test(password)) {
        return {
            success: false,
            message: errorMessages.NUMERIC_MISSING_ERROR
        }
    }

    return {
        success: true
    }
}

// At least one special character
const hasSpecialChar = (password) => {

    const regex = /[^a-zA-Z0-9]/

    if (!regex.test(password)) {
        return {
            success: false,
            message: errorMessages.SPECIAL_CHAR_MISSING_ERROR
        }
    }

    return {
        success: true
    }
}

// No white spaces allowed
const hasEmptyChar = (password) => {

    const regex = /\s/

    if (regex.test(password)) {
        return {
            success: false,
            message: errorMessages.EMPTY_CHAR_ERROR
        }
    }

    return {
        success: true
    }
}

// Final password formatter
const formatPassword = (password) => {

    const formattedPassword = password.trim()

    return {
        success: true,
        message: successMessages.PASSWORD_VALIDATION_SUCCESSFULL,
        data: formattedPassword
    }
}

export default passwordValidator