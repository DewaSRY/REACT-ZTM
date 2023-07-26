import { Routes, Route } from "react-router-dom";
import {
  HomeDirectory,
  Shope,
  Checkout,
  Navigation,
  Authentication,
} from "./Router/";
function App() {
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
