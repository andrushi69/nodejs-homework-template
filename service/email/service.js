const Mailgen = require("mailgen")

class emailService {

  constructor(env, sender) {
    this.sender = sender
    switch (env) {
      case "development":
        this.link = "http://localhost:5555"
        break
      case "test":
        this.link = "http://localhost:5000"
        break
      case "production":
        this.link = "http://heroku/"
        break
      default:
        this.link = "http://localhost:3000"
    }
  }

  createEmailTemplate(userName, verifyToken) {
    const mailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: 'node_test',
        link: this.link
      }
    });
    const email = {
      body: {
        name: userName,
        intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
        action: {
          instructions: 'To get started with API, please click here:',
          button: {
            color: '#22BC66',
            text: 'Confirm your account',
            link: `${this.link}/api/users/verify/${verifyToken}`
          }
        },
        outro: 'Need help, or have questions? Just reply to this email.'
      }
    };
    return mailGenerator.generate(email);

  }

  async sendVerifyEmail(userName, email, verifyToken) {
    const emailBody = this.createEmailTemplate(userName, verifyToken)
    const msg = {
      to: email,
      subject: "Verify email",
      html: emailBody
    }
    try {
      await this.sender.send(msg);
      return true
    } catch (error) {
      console.error(error.message)
      return false
    }
  }
}

module.exports = emailService