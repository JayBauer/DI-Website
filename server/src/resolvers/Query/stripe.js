const { getUserId } = require('../utils')

const stripe = {
  stripe(parent, args, ctx, info) {
    const user = getUserId(ctx)
    const where = { user: { id: user } }
    return ctx.db.query.stripeCustomers({ where }, info)
  },
}

module.exports = { stripe }
