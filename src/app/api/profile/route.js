"use client";

import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "../../models/User";
import { UserInfo } from "../../models/UserInfo";

export async function PUT(req) {
  const mongoUrl = process.env.MONGODB_URI;
  mongoose.connect(mongoUrl);
  const data = await req.json();
  const { _id, name, image, ...otherUserInfo } = data;

  let filter = {};
  if (_id) {
    filter = { _id };
  } else {
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    filter = { email };
  }

  const user = await User.findOne(filter);
  await User.updateOne(filter, { name, image });
  await UserInfo.findOneAndUpdate({ email: user.email }, otherUserInfo, {
    upsert: true,
  });
  return Response.json(true);
}

export async function GET(req, res) {
  const mongoUrl = process.env.MONGODB_URI;
  mongoose.connect(mongoUrl);

  const url = new URL(req.url);
  console.log(url, "666666666666666666666666");
  const _id = url.searchParams.get("_id");

  let filterUser = {};
  if (_id) {
    filterUser = { _id };
  } else {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json();
    }
    filterUser = { email };
  }

  const user = await User.findOne(filterUser).lean();
  const userInfo = await UserInfo.findOne({ email: user.email }).lean();

  return Response.json({ ...user, ...userInfo });
}
