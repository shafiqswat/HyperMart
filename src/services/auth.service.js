import {
  createUserWithEmailAndPassword,
  firebase,
  getAuth,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Timestamp } from '@react-native-firebase/firestore';

export const AuthService = {
  async SignUp({ firstName, lastName, email, password, address }) {
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
      return { ...userData, _id: uid };
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async Login({ email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password,
      );
      const uid = userCredential.user.uid;
      const response = await firestore().collection('users').doc(uid).get();
      return { ...response, uid };
    } catch (err) {
      console.log(err.message);
    }
  },
};
