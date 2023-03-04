import {Routes, Route} from "react-router-dom";
import CategoriesPreviewRoutes from "../categories-preview/categories-preview.component";
import CategoryRoutes from "../category/category.routes";


const ShopRoutes = () => {

    return (
     <Routes>
         <Route index element={<CategoriesPreviewRoutes />} />
         <Route path=':category' element={<CategoryRoutes />} />
     </Routes>
    )
}

export default ShopRoutes;