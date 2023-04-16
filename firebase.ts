// firebase.ts

import * as admin from 'firebase-admin'; // Firebase Admin SDK
// import * as serviceAccount from './portfolio-express-e4e7e-firebase-adminsdk-w21eg-dc23347a5a.json';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || ''); // Firebase service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin; // Firebase Admin SDK

const firestore = admin.firestore();  // Firestore instance

export { firestore }; // Firestore instance