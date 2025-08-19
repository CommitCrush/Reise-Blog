import { Schema, Model, model, models } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  sessionToken?: string;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  sessionToken: {
    type: String,
  },
});

export const User: Model<IUser> =
  models.User || model<IUser>("User", userSchema);