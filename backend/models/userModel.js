import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please provide your email!"],
    validate: [validator.isEmail, "Please provide valid email!"],
  },
  photo: {
    type: String,
    default: "default.png",
  },
  password: {
    type: String,
    required: [true, "Please provide password!"],
    minlength: [8, "Password must contain min 8 characters"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm password!"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Provided passwords are not the same!",
    },
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  passwordChangedAt: Date,
});

export const User = mongoose.model("User", userSchema);
