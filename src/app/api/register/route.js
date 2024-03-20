import { User } from "../../models/User";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGODB_URI);
  const password = body.password;
  if (!password?.length || password.length < 5) {
    new Error("password must be at least 5 characters");
  }

  const notHashedPassword = pass;
  const salt = bcrypt.hashSync(10);
  const hashedPassword = bcrypt.hashSync(notHashedPassword, salt);
  body.password = hashedPassword;

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
