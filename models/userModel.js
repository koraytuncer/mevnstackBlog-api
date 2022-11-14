import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  const user = this;
  console.log("User Pass : ", user.password);
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    console.log("User Pass Hash : ", user.password);
    next();
  });
});

const User = mongoose.model("User", userSchema);

export default User;
