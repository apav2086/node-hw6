const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
        owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    avatarURL: {
     type: String,
    },
    
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },

});

UserSchema.methods.checkPassword = async function (loginPW) {
    return bcrypt.compare(loginPW, this.password)
}

const User = model('users', UserSchema);

module.exports = User;