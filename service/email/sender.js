const sgMail = require("@sendgrid/mail")
const nodemailer = require("nodemailer")

class senderSendGrid {
  async send(msg) {
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY)
    await sgMail.send({...msg, from: process.env.SEND_GRID_EMAIL})
  }
}

class senderNodemailer {
  async send(msg) {
    const config = {
      host: "smtp.meta.ua",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    };
    const transporter = nodemailer.createTransport(config)
    return await transporter.sendMail({...msg, from: process.env.NODEMAILER_EMAIL})
  }
}

module.exports = {senderSendGrid, senderNodemailer}