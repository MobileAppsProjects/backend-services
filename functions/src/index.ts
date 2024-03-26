import * as v2 from "firebase-functions/v2";
import {createUserService} from "./services/auth/create.user.service";

export const helloWorld = v2.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});

export const createUser = v2.https.onRequest(async (req, res) => {
  const user = req.body;
  try {
    const newUser = await createUserService(user);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});
