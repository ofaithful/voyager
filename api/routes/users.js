const Router = require('express-promise-router')
const { check } = require('express-validator')
const router = new Router()
const { user } = require('../controllers')

module.exports = router

router.post('/register', [
  check('username')
    .notEmpty().withMessage('Username should not be empty')
    .isLength({ min: 2 }).withMessage('Must be at least 2 characters long'),
  check('password')
    .notEmpty().withMessage('Password must not be empty')
    .isLength({ min: 4 }).withMessage('Must be at least 4 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.passwordConfirmation) {
        throw new Error('Passwords do not match')
      }
      return true
    })
], async function(req, res) {
  user.register(req, res)
})

