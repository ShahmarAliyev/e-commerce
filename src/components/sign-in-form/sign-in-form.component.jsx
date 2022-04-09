import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signInWithEmail } from "../../utils/firebase/firebase.utils";

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithEmail(email, password);
      console.log(user);

      resetFormField();
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password forx email");
          break;
        case "auth/user-not-found":
          alert("No user found associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Signin
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
