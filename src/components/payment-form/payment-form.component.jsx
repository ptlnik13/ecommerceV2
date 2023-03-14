import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import ButtonComponent, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import "./payment-form.styles";
import {FormContainer, PaymentFormContainer} from "./payment-form.styles";

const PaymentFormComponent = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;


        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: 'post',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({amount: 1000})
        }).then(res => res.json());
        const {paymentIntent: {client_secret}} = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {name: 'Nikesh Patel'}
            },
        });
        if (paymentResult.error) alert(paymentResult.error.message);
        // if (paymentResult.error) console.log(paymentResult.error);
        if (paymentResult.paymentIntent.status === 'succeeded') alert('Payment Success');
    }
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement/>
                <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now </ButtonComponent>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentFormComponent;