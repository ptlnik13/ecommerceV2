import {Fragment, useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import {ReactComponent as CrwnLogo} from "../../assets/images/crown.svg";
import "./navigation.styles.scss";

import './navigation.styles.scss';

const NavigationRoutes = () => {
    const {currentUser} = useContext(UserContext);

    const signOutHandler =async ()=>{
        await signOutUser();
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