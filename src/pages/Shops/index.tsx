import { Routes, Route } from "react-router-dom";
// import { useDispatchAction } from "@redux/store";
import useCatagory from "@redux/Catagories/hooks/useCatagory";
import { useEffect } from "react";

import Previews from "./pages/Previews";
import CategoryProducts from "./pages/Category";

const Shope = () => {
  const { fetchCatagoriesStart } = useCatagory();
  useEffect(() => {
    fetchCatagoriesStart();
  }, []);
  return (
    <Routes>
      <Route index element={<Previews />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
};

export default Shope;
