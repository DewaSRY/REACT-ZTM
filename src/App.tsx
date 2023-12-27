import { Routes, Route } from "react-router-dom";
import HomeDirectory from "@pages/Home";
import Checkout from "@pages/Checkout";
import Authentication from "@pages/Authentication";
import Navigation from "@layouts/Navigation";
// import Category from "./pages/Category";
import { useEffect } from "react";
import useCheckUser from "@redux/Authentication/hooks/useCheckUser";
import Previews from "./pages/Shops/pages/Previews";
import CategoryProducts from "./pages/Shops/pages/Category";

function App() {
  const { checkUserSession } = useCheckUser();
  useEffect(() => {
    checkUserSession();
  }, []);
  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index element={<HomeDirectory />} />
        <Route path="shop/*">
          <Route index element={<Previews />} />
          <Route path=":category" element={<CategoryProducts />} />
        </Route>
        <Route path="Authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
