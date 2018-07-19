const { user } = require('./user')
const { booking } = require('./booking')
const { stripe } = require('./stripe')

module.exports = {
  ...user,
  ...booking,
  ...stripe
}
