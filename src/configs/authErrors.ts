export const authErrors = {
  firstName: {
    minLength: 2,
    maxLength: 20,
    minLengthError: `Last name length must be greater than ${2}`,
    maxLengthError: `First name length must not exceed ${20}`,
  },
  lastName: {
    minLength: 2,
    maxLength: 20,
    minLengthError: `Last name length must be greater than ${2}`,
    maxLengthError: `Last name length must not exceed ${20}`,
  },
  login: {
    minLength: 4,
    maxLength: 12,
    minLengthError: `Last name length must be greater than ${4}`,
    maxLengthError: `Login length must not exceed ${12}`,
  },
  password:{
    minLength: 6,
    maxLength: 30,
    minLengthError: `Password length must be greater than ${6}`,
    maxLengthError: `Password must not exceed ${30}`,
  }
}
