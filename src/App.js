import {Route, Routes} from "react-router-dom";
import HomeRoutes from "./routes/home/Home.routes";
import NavigationRoutes from "./routes/navigation/Navigation.routes";
import AuthenticationRoutes from './routes/authentication/authentication.routes';
import ShopRoutes from "./routes/shop/shop.routes";
import CheckoutRoutes from "./routes/checkout/checkout.routes";
import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkUserSession} from "./store/user/user.actions";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkUserSession());
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
    )
};

export default App;
