export const utilities = {

    MIN_EMAIL_LENGTH: 6,

    MIN_PASSWORD_LENGTH: 6,

    VALID_TLD: [
        ".com",
        ".in",
        ".org",
        ".net",
        ".edu",
        ".gov",
        ".io",
        ".dev",
        ".app",
        ".ai",
        ".co",
        ".info",
        ".biz",
        ".me",
        ".xyz",
        ".online",
        ".store",
        ".tech"
    ]
}

export const errorMessages = {

    EMPTY_EMAIL_ERROR:
        "Please enter an email address",

    INVALID_EMAIL_ERROR:
        "Please enter a valid email address",

    INVALID_TLD_ERROR:
        "Email contains an unsupported top-level domain",

    EMPTY_PASSWORD_ERROR:
        "Please enter a password",

    MIN_PASSWORD_LENGTH_ERROR:
        `Password should contain at least ${utilities.MIN_PASSWORD_LENGTH} characters`,

    UPPER_CASE_CHAR_MISSING_ERROR:
        "Password should contain an uppercase letter",

    LOWER_CASE_CHAR_MISSING_ERROR:
        "Password should contain a lowercase letter",

    NUMERIC_MISSING_ERROR:
        "Password should contain a numeric character",

    SPECIAL_CHAR_MISSING_ERROR:
        "Password should contain a special character",

    EMPTY_CHAR_ERROR:
        "White spaces are not allowed in the password"
}

export const successMessages = {

    EMAIL_VALIDATION_SUCCESSFULL:
        "The provided email successfully passed all validation checks",

    PASSWORD_VALIDATION_SUCCESSFULL:
        "The provided password successfully passed all validation checks"
}