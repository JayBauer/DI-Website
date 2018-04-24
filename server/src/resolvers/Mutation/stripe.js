const { getUserId } = require('../../utils')
const stripeApi = require('stripe')('sk_test_1IJ888VLPuZ4Ce0FUALcxoGF')

const stripe = {
  async saveCustomer(parent, { source, email, amount, currency }, ctx, info) {
    const userId = getUserId(ctx)
    const checkCustomer = await ctx.db.query.user({ where: { id: userId } })

    if (!checkCustomer.stripe) {
      const customer = await stripeApi.customers.create({
        source,
        email
      })

      return ctx.db.mutation.createStripeCustomer(
        {
          data: {
            user: { connect: { id: userId } },
            stripe_id: customer.id
          }
        },
        info
      )
    }
  },

  async newPayment(parent, { amount, currency, customer }, ctx, info) {
    const userId = getUserId(ctx)
    console.log(customer)
    // Charge the Customer:
    const charge = await stripeApi.charges.create({
      amount,
      currency,
      customer: customer.stripe_id
    })

    return ctx.db.mutation.createCharge(
      {
        data: {
          customer: { connect: customer },
          amount,
          currency
        }
      },
      info
    )
  },
}

module.exports = { stripe }
