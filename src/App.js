import {Route, Routes} from "react-router-dom";
import HomeRoutes from "./routes/home/Home.routes";
import NavigationRoutes from "./routes/navigation/Navigation.routes";
import AuthenticationRoutes from './routes/authentication/authentication.routes';
import ShopRoutes from "./routes/shop/shop.routes";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationRoutes />}>
        <Route index element={<HomeRoutes />} />
        <Route path='shop' element={<ShopRoutes />} />
        <Route path='auth' element={<AuthenticationRoutes />} />
      </Route>
    </Routes>
  );
};

export default App;
