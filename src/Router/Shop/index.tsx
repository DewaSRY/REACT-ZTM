import { Routes, Route } from "react-router-dom";
import { Previews } from "./Previews";
import { Products } from "./Products";
export function Shope() {
  return (
    <Routes>
      <Route index element={<Previews />} />
      <Route path=":category" element={<Products />} />
    </Routes>
  );
}
