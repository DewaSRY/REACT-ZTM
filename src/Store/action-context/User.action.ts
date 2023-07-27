import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
} from "../../utils/Firebase.utils";
export const logInWithGoogle = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDocumentFromAuth(user);
};

export const logInWithEmail = async (email, password) => {
  try {
    await signInAuthUserWithEmailAndPassword(email, password);
  } catch (error) {
    switch (error.code) {
      case "auth/wrong-password":
        return alert("incorrect password");
      case "auth/user-not-found":
        return alert("Email not found ");
      default:
        console.log("some things was wrong", error);
    }
  }
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const { user } = await createAuthUserWithEmailAndPassword(email, password);
    await createUserDocumentFromAuth(user, { displayName: name });
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("email already in use");
    } else {
      alert(`"something was wrong", &{error}`);
    }
  }
};
