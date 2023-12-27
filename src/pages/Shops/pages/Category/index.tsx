import { useParams } from "react-router-dom";
import { FC, useEffect } from "react";
import { useSelectors } from "@redux/store";
import ContainerProduct from "@/pages/Shops/containers/ContainerProduct";
import useCatagory from "@/feature/redux/Catagories/hooks/useCatagory";
import Spinier from "@/common/Spinier";

const CategoryProducts: FC = () => {
  const { fetchCatagoriesStart } = useCatagory();
  const { categories, isLoading } = useSelectors((s) => s.catagories);
  useEffect(() => {
    if (categories.length > 0) return;
    fetchCatagoriesStart();
  }, []);
  const { category } = useParams();
  const { categoryMap } = useSelectors((s) => s.catagories);
  return (
    <>
      <div className="w-full h-full">
        {isLoading ? (
          <Spinier />
        ) : (
          <ContainerProduct products={categoryMap[category]} title={category} />
        )}
      </div>
    </>
  );
};

export default CategoryProducts;
