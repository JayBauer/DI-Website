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
  files(parent, args, ctx, info) {
    return ctx.db.query.files()
  }
}

module.exports = { Query }
