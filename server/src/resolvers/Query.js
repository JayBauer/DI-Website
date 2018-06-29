const { getUserId } = require('../utils')

const Query = {
  booking(parent, { id }, ctx, info) {
    return ctx.db.query.booking({ where: { id } }, info)
  },
  bookings(parent, { user }, ctx, info) {
    return ctx.db.query.bookings({ where: { user } }, info)
  },
  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  user(parent, { id }, ctx, info) {
    return ctx.db.query.user({ where: { id } }, info)
  },
  users(parent, args, ctx, info) {
    return ctx.db.query.users({}, info)
  },
  files(parent, args, ctx, info) {
    return ctx.db.query.files({}, info)
  },
  stripe(parent, args, ctx, info) {
    const user = getUserId(ctx)
    const where = { user: { id: user } }
    return ctx.db.query.stripeCustomers({ where }, info)
  },
}

module.exports = { Query }
