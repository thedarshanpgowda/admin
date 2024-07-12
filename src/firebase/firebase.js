import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD96ZZTs0J1Ociazqhepa_yE5MyBThEGWc",
  authDomain: "plantex-25de1.firebaseapp.com",
  projectId: "plantex-25de1",
  storageBucket: "plantex-25de1.appspot.com",
  messagingSenderId: "529587909926",
  appId: "1:529587909926:web:6d8e98d5dcd11ebcbebde7",
  measurementId: "G-S3QM3JV639"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = async () => {
  try {
    const result = await auth.signInWithPopup(provider);
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error during Google sign-in", error);
    throw error;
  }
};


export default firebase;
