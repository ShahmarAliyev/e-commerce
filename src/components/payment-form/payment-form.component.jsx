import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };

  console.log(React.version);
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now</Button>
        <CardElement />
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
