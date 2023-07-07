import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
