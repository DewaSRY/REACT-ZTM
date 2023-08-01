import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { Category } from "../state";
// import { Category } from '../../store/categories/category.types';
const firebaseConfig = {
  apiKey: "AIzaSyCIiQNscpjM2Ii5rmzk98i9MhqT79H2Zzo",
  authDomain: "dewa-learn-react-ztm.firebaseapp.com",
  projectId: "dewa-learn-react-ztm",
  storageBucket: "dewa-learn-react-ztm.appspot.com",
  messagingSenderId: "383517192896",
  appId: "1:383517192896:web:757c82a31522563af53325",
};
// export type AdditionalInformation = {
//   displayName?: string;
// };

// export type UserData = {
//   createdAt: Date;
//   displayName: string;
//   email: string;
// };
export const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "Catagories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};
// export const getCategoriesAndDocuments = async (): Promise<ProductMap> => {
//   const collectionRef = collection(db, "Catagories");
//   const q = query(collectionRef);

//   const querySnapshot = await getDocs(q);
//   return querySnapshot.docs.reduce((products, item) => {
//     const { title, items } = item.data();
//     products[title.toLowerCase()] = items;
//     return products;
//   }, {} as ProductMap);
// };

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        console.log(auth);
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
    console.log(unsubscribe);
  });
};
