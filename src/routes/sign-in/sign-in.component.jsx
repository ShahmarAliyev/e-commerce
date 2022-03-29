import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
  const logGooglePopupUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef);
  };

  return (
    <div>
      SignIn
      <Button onClick={logGooglePopupUser}>Sign in with Google</Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
