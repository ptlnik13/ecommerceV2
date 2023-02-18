import {signInWithGooglePopup} from "../../utils/firebase/firebase.utlis";

const signInRoutes = () => {

    const logGoogleUser = async ()=>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div>
            <h1>SIgn In Page</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    )
}

export default signInRoutes;