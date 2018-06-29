const { getUserId } = require('../../utils')
const stripeApi = require('stripe')(process.env.STRIPE_SK)

const stripe = {
  async makePayment(parent, { source, amount, currency }, ctx, info) {
    const userId = getUserId(ctx)
    const getUser = await ctx.db.query.user({ where: { id: userId } })
    const getStripe = await ctx.db.query.stripeCustomers({ where: { user: { id: getUser.id } } })
    var stripeId;

    if(!getStripe[0]) {
      const customer = await stripeApi.customers.create({ source, email: getUser.email })
      const charge = await stripeApi.charges.create({ amount, currency, customer: customer.id })
      stripeId = customer.id

      ctx.db.mutation.createStripeCustomer(
        {
          data: {
            user: { connect: { id: userId } },
            stripeId: customer.id
          }
        },
        info
      )
    } else {
      stripeId = getStripe[0].stripeId
      const charge = await stripeApi.charges.create({ amount, currency, customer: stripeId })
    }

    return ctx.db.mutation.createCharge(
      {
        data: {
          chargedTo: { connect: { stripeId } },
          amount,
          currency
        }
      },
      info
    )
  },

  async deleteStripeCustomer(parent, { stripeId }, ctx, info) {
    return ctx.db.mutation.deleteStripeCustomer({ where: { stripeId } })
  }
}

module.exports = { stripe }
