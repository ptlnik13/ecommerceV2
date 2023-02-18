import {Routes, Route} from "react-router-dom";
import HomeRoutes from "./routes/home/Home.routes";
import NavigationRoutes from "./routes/navigation/Navigation.routes";
import SignInRoutes from "./routes/sign-in/sign-in.routes";




const ShopRoutes = ()=>{
return(
    <div>
        <h2>I am shop page</h2>
    </div>
)
}

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<NavigationRoutes/>}>
                <Route index element={<HomeRoutes/>} />
                <Route path='shop' element={<ShopRoutes/>} />
                <Route path='sign-in' element={<SignInRoutes/>} />
            </Route>
        </Routes>
    )
}

export default App;
