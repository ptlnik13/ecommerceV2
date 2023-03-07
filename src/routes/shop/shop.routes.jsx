import {Routes, Route} from "react-router-dom";
import CategoriesPreviewRoutes from "../categories-preview/categories-preview.component";
import CategoryRoutes from "../category/category.routes";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchCategoriesAsync} from "../../store/categories/category.actions";


const ShopRoutes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreviewRoutes/>}/>
            <Route path=':category' element={<CategoryRoutes/>}/>
        </Routes>
    )
}

export default ShopRoutes;