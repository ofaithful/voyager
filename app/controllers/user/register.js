const User = require('../../models/user')
const { validationResult } = require('express-validator')
const { checkUser, hashPassword } = require('../../utils/user')

module.exports = async function(req, res) {
  // input data validation
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const { username, password } = req.body
  // Check if there's a user with requested username
  const match = await checkUser(username)
  if (match) {
    return res.json({ msg: 'Username already exists' })
  }

  const newUser = new User({ username, password })
  newUser.password = await hashPassword(password)

  try {
    newUser.save()
    res.json({ message: 'Successfully registered' })
  } catch (err) {
    console.log(err)
    return res.sendStatus(422).json({ errors: err })
  }
}
