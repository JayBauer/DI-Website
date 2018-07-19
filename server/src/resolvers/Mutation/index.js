const { auth } = require('./auth')
const { user } = require('./user')
const { booking } = require('./booking')
const { stripe } = require('./stripe')

module.exports = {
  ...auth,
  ...user,
  ...booking,
  ...stripe
}
