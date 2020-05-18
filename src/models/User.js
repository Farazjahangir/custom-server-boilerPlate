const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      lowercase: true,
    },
    password: {
      type: String,
      select: false,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(uniqueValidator, { message: "{PATH} already exist." });

schema.methods.getPublicProfile = function () {
  const user = this.toObject();

  delete user.password;

  return user;
};

const User = mongoose.model("user", schema);

module.exports = User;
