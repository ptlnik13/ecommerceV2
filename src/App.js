import {Route, Routes} from "react-router-dom";
import HomeRoutes from "./routes/home/Home.routes";
import NavigationRoutes from "./routes/navigation/Navigation.routes";
import AuthenticationRoutes from './routes/authentication/authentication.routes';
import ShopRoutes from "./routes/shop/shop.routes";
import CheckoutRoutes from "./routes/checkout/checkout.routes";
import {useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "./utils/firebase/firebase.utils";
import {setCurrentUser} from "./store/user/user.actions";
import {useDispatch} from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        return onAuthStateChangedListener(async (user) => {
            if (user) {
                await createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
    }, [/* dispatch */]);
    return (
        <Routes>
            <Route path='/' element={<NavigationRoutes/>}>
                <Route index element={<HomeRoutes/>}/>
                <Route path='shop/*' element={<ShopRoutes/>}/>
                <Route path='checkout' element={<CheckoutRoutes/>}/>
                <Route path='auth' element={<AuthenticationRoutes/>}/>
            </Route>
        </Routes>
    );
};

export default App;
