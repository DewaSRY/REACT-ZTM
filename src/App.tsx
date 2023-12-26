import { Routes, Route } from "react-router-dom";
import Shope from "@pages/Shops";
import HomeDirectory from "@pages/Home";
import Checkout from "@pages/Checkout";
import Authentication from "@pages/Authentication";
import { Navigation } from "./layout/Navigation";
// import Category from "./pages/Category";
import { useEffect } from "react";
import useCheckUser from "@redux/Authentication/hooks/useCheckUser";

function App() {
  const { checkUserSession } = useCheckUser();
  useEffect(() => {
    console.log(checkUserSession());
    checkUserSession();
  }, [checkUserSession]);
  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index element={<HomeDirectory />} />
        <Route path="shop/*" element={<Shope />} />
        <Route path="Authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
