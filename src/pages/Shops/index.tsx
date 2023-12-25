import { Routes, Route } from "react-router-dom";
import { useDispatchAction } from "@feature/store";
import { useEffect } from "react";

import Previews from "./pages/Previews";
import CategoryProducts from "./pages/Category";

const Shope = () => {
  const { fetchCatagoriesStart } = useDispatchAction();
  useEffect(() => {
    fetchCatagoriesStart();
  }, [fetchCatagoriesStart]);
  return (
    <Routes>
      <Route index element={<Previews />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
};

export default Shope;
