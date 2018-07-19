const { getUserId } = require('../utils')

const user = {
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
  }
}

module.exports = { user }
