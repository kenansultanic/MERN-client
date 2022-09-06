import PasswordValidator from 'password-validator'

const schema = new PasswordValidator()
schema
.is().min(8).max(24)
.has().uppercase().lowercase()
.has().digits(1)
.has().not().spaces()

export default schema