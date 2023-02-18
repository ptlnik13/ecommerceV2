import {Routes, Route} from "react-router-dom";
import HomeRoutes from "./routes/home/Home.routes";
import NavigationRoutes from "./routes/navigation/Navigation.routes";
import AuthenticationRoutes from './routes/authentication/authentication.routes';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationRoutes />}>
        <Route index element={<HomeRoutes />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<AuthenticationRoutes />} />
      </Route>
    </Routes>
  );
};

export default App;
