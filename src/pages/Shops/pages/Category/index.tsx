import { useParams } from "react-router-dom";
import { FC, useMemo } from "react";
import { useSelectors } from "@redux/store";
import ContainerProduct from "@/pages/Shops/containers/ContainerProduct";

const CategoryProducts: FC = () => {
  const { category } = useParams();
  const { categoryMap } = useSelectors((s) => s.catagories);
  const products = useMemo(() => categoryMap[category], [category]);
  return <ContainerProduct products={products} title={category} />;
};

export default CategoryProducts;
