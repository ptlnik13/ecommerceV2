import {Routes, Route} from "react-router-dom";
import CategoriesPreviewRoutes from "../categories-preview/categories-preview.component";
import CategoryRoutes from "../category/category.routes";
import {useEffect} from "react";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";
import {useDispatch} from "react-redux";
import {setCategoriesMap} from "../../store/categories/category.actions";


const ShopRoutes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoryMap));
        }
        getCategoriesMap();
    }, []);

    return (
     <Routes>
         <Route index element={<CategoriesPreviewRoutes />} />
         <Route path=':category' element={<CategoryRoutes />} />
     </Routes>
    )
}

export default ShopRoutes;