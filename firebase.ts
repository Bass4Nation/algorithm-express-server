// firebase.ts

import * as admin from 'firebase-admin';
import * as serviceAccount from './portfolio-express-e4e7e-firebase-adminsdk-w21eg-dc23347a5a.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;
