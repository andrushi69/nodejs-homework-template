const mongoose = require('mongoose');
const {Schema, SchemaTypes, model} = mongoose;


const contactSchema = new Schema({
    name: {
      type: String,
      unique: true,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
      required: true
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

const Contact = model('contact', contactSchema);


module.exports = Contact