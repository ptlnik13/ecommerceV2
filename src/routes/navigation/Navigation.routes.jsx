import {Fragment} from "react";
import {Outlet, Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import {ReactComponent as CrwnLogo} from "../../assets/images/crown.svg";
import "./navigation.styles.scss";

import './navigation.styles.scss';

const NavigationRoutes = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    const signOutHandler =async ()=>{
        const res = await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)
                    }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default NavigationRoutes;