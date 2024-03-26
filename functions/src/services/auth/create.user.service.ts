import Database from "../../model/database";
import {User} from "../../types/user";
const db = Database.getInstance().getDb();

export const createUserService = async (user: User) => {
  console.log("Creating user");
  console.log(user);
  if (user.email === "" || user.password === "") {
    throw new Error("Missing fields");
  }

  await db.collection("users").doc(user.uid).set({
    email: user.email,
    password: user.password,
  });

  return user;
};
