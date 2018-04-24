const { Query } = require('./Query')
const { auth } = require('./Mutation/auth')
const { booking } = require('./Mutation/booking')
const { user } = require('./Mutation/user')
const { stripe } = require('./Mutation/stripe')
const { AuthPayload } = require('./AuthPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...booking,
    ...user,
    ...stripe,
  },
  AuthPayload,
}
