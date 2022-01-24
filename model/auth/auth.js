const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const gravatar = require("gravatar")
const {Schema, model} = mongoose;
const {randomUUID} = require("crypto")


const userSchema = new Schema({
    name: {
      type: String,
      default: "User",
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Set email'],
      validate(value) {
        const val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return val.test(String(value).trim().toLowerCase())
      }
    },
    password: {
      type: String,
      required: [true, 'Set password'],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    avatar: {
      type: String,
      default: function () {
        return gravatar.url(this.email, {s: "250"}, true)
      }
    },
    avatarCloudId: {
      type: String,
      default: null
    },
    token: {
      type: String,
      default: null
    },
    isVerifyToken: {
      type: Boolean,
      default: false
    },
    verifyToken: {
      type: String,
      default: randomUUID()
    },
  }, {
    versionKey: false, timestamps: false,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id
        return ret
      }
    },
    toObject: {virtuals: false}
  },
)

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(6)
    this.password = await bcrypt.hash(this.password, salt)
  }
  next()
})

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const User = model('user', userSchema);


module.exports = User