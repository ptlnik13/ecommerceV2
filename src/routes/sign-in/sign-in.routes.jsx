import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utlis";

const signInRoutes = () => {

    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>SIgn In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    )
}

export default signInRoutes;