import {useState} from 'react';

import FormInputComponent from '../form-input/form-input.component';
import ButtonComponent, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {ButtonsContainer, SignInContainer} from "./sign-in-form.styles";
import {useDispatch} from "react-redux";
import {emailSignInStart, googleSignInStart} from "../../store/user/user.actions";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInFormComponent = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const dispatch = useDispatch();
    const {email, password} = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => dispatch(googleSignInStart());

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInputComponent
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInputComponent
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <ButtonsContainer>
                    <ButtonComponent type='submit'>Sign In</ButtonComponent>
                    <ButtonComponent type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                        Google sign in
                    </ButtonComponent>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInFormComponent;
