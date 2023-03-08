import {Route, Routes} from "react-router-dom";
import HomeRoutes from "./routes/home/Home.routes";
import NavigationRoutes from "./routes/navigation/Navigation.routes";
import AuthenticationRoutes from './routes/authentication/authentication.routes';
import ShopRoutes from "./routes/shop/shop.routes";
import CheckoutRoutes from "./routes/checkout/checkout.routes";
import {Fragment, useEffect} from "react";
import {fetchCurrentUserAsync} from "./store/user/user.actions";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserIsLoading} from "./store/user/user.selectors";
import SpinnerComponent from "./components/spinner/spinner.component";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentUserAsync());
    }, [/* dispatch */]);
    const isLoading = useSelector(selectCurrentUserIsLoading)
    return (
        <Fragment>
            {
                isLoading ? <SpinnerComponent/> :

                    (<Routes>
                        <Route path='/' element={<NavigationRoutes/>}>
                            <Route index element={<HomeRoutes/>}/>
                            <Route path='shop/*' element={<ShopRoutes/>}/>
                            <Route path='checkout' element={<CheckoutRoutes/>}/>
                            <Route path='auth' element={<AuthenticationRoutes/>}/>
                        </Route>
                    </Routes>)
            }
        </Fragment>
    )
};

export default App;
