import {Fragment} from "react";
import {Outlet} from "react-router-dom";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import {ReactComponent as CrwnLogo} from "../../assets/images/crown.svg";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";

import {NavigationContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selectors";
import {selectIsCartOpen} from "../../store/cart/cart.selectors";

const NavigationRoutes = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen);
    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo'/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>) : (<NavLink to='/auth'>SIGN IN</NavLink>)
                    }
                    <CartIconComponent/>
                </NavLinks>{
                isCartOpen &&
                <CartDropdownComponent/>
            }
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default NavigationRoutes;