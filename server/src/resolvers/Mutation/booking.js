const booking = {
  async saveBooking(parent, { id, user, bookingFor, ontarioRes, bodyParts, waiver, referral, payment }, ctx, info) {
    const bookingExists = await ctx.db.query.booking({ where: { id } })
    console.log(waiver)
    if(!bookingExists) {
      console.log('No booking!')
      return ctx.db.mutation.createBooking(
        {
          data: {
            user: { connect: { id: user } },
            bookingFor,
            ontarioRes,
            bodyParts,
            waiver: { create: waiver },
            referral: { create: referral },
            payment
          }
        },
        info
      )
    } else {
      console.log('Booking Found!')
      return ctx.db.mutation.updateBooking(
        {
          where: { id },
          data: {
            user: { connect: { id: user } },
            bookingFor,
            ontarioRes,
            bodyParts,
            waiver: { update: waiver },
            referral: { update: referral },
            payment
          }
        },
        info
      )
    }
  },

  async deleteBooking(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteBooking({ where: { id } }, info)
  }
}

module.exports = { booking }
