import {
    utilities,
    errorMessages,
    successMessages
} from "../constants.js"

const emailValidator = (email) => {

    // Basic safety check
    if (!email || typeof email !== "string") {
        return {
            success: false,
            message: errorMessages.EMPTY_EMAIL_ERROR
        }
    }

    // Store validation results
    const atSymbol = hasAtSymbol(email)

    const validTLD = hasValidTLD(email)

    const validStart = hasValidStart(email)

    const minLength = hasMinLength(email)

    const noConsecutiveDots = hasNoConsecutiveDots(email)

    // Return first failed validation
    if (!atSymbol.success) return atSymbol

    if (!validTLD.success) return validTLD

    if (!validStart.success) return validStart

    if (!minLength.success) return minLength

    if (!noConsecutiveDots.success) return noConsecutiveDots

    // Return formatted email
    return formatEmail(email)
}

// Format and normalize email
const formatEmail = (email) => {

    const formattedEmail = email.trim().toLowerCase()

    return {
        success: true,
        message: successMessages.EMAIL_VALIDATION_SUCCESSFULL,
        data: formattedEmail
    }
}

// Must contain exactly one @ symbol
const hasAtSymbol = (email) => {

    const matches = email.match(/@/g)

    if (matches !== null && matches.length === 1) {
        return {
            success: true
        }
    }

    return {
        success: false,
        message: errorMessages.INVALID_EMAIL_ERROR
    }
}

// Must contain valid TLD
const hasValidTLD = (email) => {

    const isValid = utilities.VALID_TLD.some((tld) =>
        email.endsWith(tld)
    )

    if (isValid) {
        return {
            success: true
        }
    }

    return {
        success: false,
        message: errorMessages.INVALID_TLD_ERROR
    }
}

// First character must be alphabet or number
const hasValidStart = (email) => {

    const regex = /^[a-zA-Z0-9]/

    if (regex.test(email)) {
        return {
            success: true
        }
    }

    return {
        success: false,
        message: "Email should start with a letter or number"
    }
}

// Minimum email length validation
const hasMinLength = (email) => {

    if (email.length >= utilities.MIN_EMAIL_LENGTH) {
        return {
            success: true
        }
    }

    return {
        success: false,
        message: `Email should contain at least ${utilities.MIN_EMAIL_LENGTH} characters`
    }
}

// No consecutive dots allowed
const hasNoConsecutiveDots = (email) => {

    if (!email.includes("..")) {
        return {
            success: true
        }
    }

    return {
        success: false,
        message: "Consecutive dots are not allowed in email"
    }
}

export default emailValidator