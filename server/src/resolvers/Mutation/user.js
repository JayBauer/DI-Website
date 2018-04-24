const { getUserId } = require('../../utils')

const user = {
  async updateUser(parent, { id, ...args }, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: {
          email: args.email,
          firstName: args.firstName,
          lastName: args.lastName,
          phone: args.phone,
          address1: args.address1,
          address2: args.address2,
          city: args.city,
          province: args.province,
          postal: args.postal,
        }
      },
      info
    )
  }
}

module.exports = { user }
