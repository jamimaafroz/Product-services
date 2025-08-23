"use server";

import DbConnect, { collectionobj } from "@/lib/DbConnect";

export const registerUser = async (payload) => {
  try {
    const { name, email, password } = payload;

    if (!name || !email || !password) {
      return { success: false, message: "All fields are required." };
    }

    const userCollection = await DbConnect(collectionobj.userCollection);

    const existingUser = await userCollection.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User already exists." };
    }

    const result = await userCollection.insertOne({
      name,
      email,
      password, // hash in production
      createdAt: new Date(),
    });

    // Convert ObjectId to string for client
    return { success: true, id: result.insertedId.toString() };
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, message: error.message };
  }
};
