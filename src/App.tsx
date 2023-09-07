import { Routes, Route } from "react-router-dom";
import { Shope } from "./Router/Shop";
import { HomeDirectory } from "./Router/Home";
import { Checkout } from "./Router/Checkout";
import { Navigation } from "./Router/Navigation";
import { Authentication } from "./Router/Authentication";
import { useDispatchAction } from "./Feature/store";
import { useEffect } from "react";
function App() {
  const { checkUserSession } = useDispatchAction();
  useEffect(() => {
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
