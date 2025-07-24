import {
  createUserWithEmailAndPassword,
  firebase,
  getAuth,
} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { doc, setDoc, Timestamp } from '@react-native-firebase/firestore';

export const AuthService = {
  async SignUp({ firstName, lastName, email, password, address }) {
    console.log(firstName, lastName, email, password, address);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password,
      );
      const uid = userCredential.user.uid;
      const userData = {
        firstName,
        lastName,
        email,
        address,
        createdAt: Timestamp.now(),
      };
      await firestore().collection('users').doc(uid).set(userData);
      // await setDoc(doc(firebase, 'users', uid), userData);
      return { ...userData, _id: uid };
    } catch (err) {
      throw new Error(err.message);
    }
  },
};
