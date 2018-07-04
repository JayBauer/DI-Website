const { createWriteStream, unlink } = require('fs')
const mkdirp = require('mkdirp')
const shortid = require('shortid')

const uploadDir = './src/uploads'
mkdirp.sync(uploadDir)

const storeUpload = ({ stream, filename }, path, sid) =>
  new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path + sid + filename))
      .on("finish", () => resolve())
      .on("error", reject)
)

function removeFile(url) {
  unlink(url, (err) => {
    if(err) {
      console.log('File does not exist?')
    }
  })
  console.log('Deleted ' + url)
}

const booking = {
  async saveBooking(parent, { id, user, bookingFor, ontarioRes, bodyParts, waiver, referral, payment, progress }, ctx, info) {
    console.log('Save Booking')
    const bookingExists = await ctx.db.query.booking({ where: { id } })
    if(!bookingExists) {
      return ctx.db.mutation.createBooking(
        {
          data: {
            user: { connect: { id: user } },
            bookingFor,
            ontarioRes,
            bodyParts,
            waiver: { create: waiver },
            referral: {
              create: {
                pay: referral.pay,
                upload: referral.upload
              }
            },
            payment,
            progress
          }
        },
        info
      )
    } else {
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
            payment,
            progress
          }
        },
        info
      )
    }
  },

  async deleteBooking(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteBooking({ where: { id } }, info)
  },

  async uploadFile(parent, { file, path }, ctx, info) {
    console.log('Upload File')
    const sid = shortid.generate() + '-'
    const { stream, filename, encoding, mimetype } = await file
    await storeUpload({ stream, filename }, path, sid)
    return ctx.db.mutation.createFile(
      {
        data: {
          filename,
          mimetype,
          encoding,
          url: path + sid + filename
        }
      },
      info
    )
  },

  async deleteFile(parent, { url }, ctx, info) {
    const fileExists = await ctx.db.query.file({ where: { url } })
    if(fileExists) {
      removeFile(url)
      return ctx.db.mutation.deleteFile({ where: { url } })
    } else {
      throw new Error('File not found!')
    }
  }
}

module.exports = { booking }
