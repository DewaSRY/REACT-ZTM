import { Routes, Route } from "react-router-dom";
import Shope from "@pages/Shops";
import HomeDirectory from "@pages/Home";
import Checkout from "@pages/Checkout";
import Authentication from "@pages/Authentication";
import { Navigation } from "./layout/Navigation";
// import Category from "./pages/Category";
import { useDispatchAction } from "@redux/store";
import { useEffect } from "react";
function App() {
  const { checkUserSession } = useDispatchAction();
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
