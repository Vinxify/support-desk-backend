const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requred: [true, "Please add a name"],
    },
    email: {
      type: String,
      requred: [true, "Please add an email"],
      unique: true,
    },

    password: {
      type: String,
      requred: [true, "Please add a password"],
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
