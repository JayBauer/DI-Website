const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const resolvers = require('./resolvers')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const express = require('express')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the Prisma DB schema
      endpoint: process.env.PRISMA_ENDPOINT,    // the endpoint of the Prisma DB service (value is set in .env)
      secret: process.env.PRISMA_SECRET,        // taken from database/prisma.yml (value is set in .env)
      debug: false,                              // log all GraphQL queries & mutations
    }),
  }),
})

server.use('/uploads', express.static(__dirname + '/uploads'));
server.use('/send', bodyParser.json())
server.post('/send', (req, res) => {
  console.log('Post run, go')
  const { firstName, lastName, phone, email, message } = req.body
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'icmhjktu475bdvwp@ethereal.email',
      pass: 'uxqxhx2xS9ru6ngBMt'
    }
  })
  // setup email data with unicode symbols
  let mailOptions = {
    from: email, // sender address
    to: 'jbauer@elitedigital.ca', // list of receivers
    subject: 'New message from: ' + firstName + ' ' + lastName, // Subject line
    text: `Email: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    html: `<p>Email: ${email}</p><br/><p>Phone: ${phone}</p><br/><br/><p>${message}</p>`
  }
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    res.sendStatus(200)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  })
})

const options = {
  port: 8101,
  endpoint: '/',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

server.start(options, ({ port }) => console.log(`Server is running on port ${port}, listening for changes.`))
