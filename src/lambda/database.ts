import 'firebase/firestore';
import * as admin from 'firebase-admin';

const a = process.env.REACT_APP_PROJECT_ID
const b = process.env.REACT_APP_PRIVATE_KEY
const c =  process.env.REACT_APP_CLIENT_EMAIL

if (!admin.apps.length) {
  console.log('FOR TESTING ->, a, b, c)
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.REACT_APP_PROJECT_ID,
      privateKey: process.env.REACT_APP_PRIVATE_KEY,
      clientEmail: process.env.REACT_APP_CLIENT_EMAIL,
    }),
    databaseURL: process.env.REACT_APP_DATABASE_URL,
  });
}

const firestore = admin.firestore();

export { firestore };
