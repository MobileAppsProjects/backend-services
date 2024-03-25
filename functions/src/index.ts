import * as v2 from 'firebase-functions/v2';
import * as admin from 'firebase-admin';


admin.initializeApp();
const db = admin.firestore();
export const helloWorld = v2.https.onRequest((req, res) => {
  res.send('Hello from Firebase!');
});

export const getUsers = v2.https.onRequest(async (req, res) => {
    const snapshot = await db.collection('users').get();
    const users: any[] = [];
    snapshot.forEach((doc) => {
        users.push(doc.data());
    });
    res.send(users);
    });

export const createUser = v2.https.onRequest(async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send('Missing fields');
    }

    const user = await admin.auth().createUser({
        email,
        password,
    });

    await db.collection('users').doc(user.uid).set({
        email,
        password,
    });

    res.send(user);
    }
);
