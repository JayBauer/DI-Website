const booking = {
  booking(parent, { bookingNumber }, ctx, info) {
    return ctx.db.query.booking({ where: { bookingNumber } }, info)
  },
  bookings(parent, { user }, ctx, info) {
    return ctx.db.query.bookings({ where: { user } }, info)
  }
}

module.exports = { booking }
