import { useSelectors } from "@redux/store";
import { FC, useEffect } from "react";
import Spinier from "@common/Spinier";
import ContainerProduct from "@/pages/Shops/containers/ContainerProduct";
import useCategory from "@/feature/redux/Catagories/hooks/useCatagory";

const Previews: FC = () => {
  const { isLoading, categoryMap } = useSelectors((s) => s.catagories);
  const { fetchCatagoriesStart } = useCategory();
  const catagories = useSelectors((s) => s.catagories.categories);

  useEffect(() => {
    if (catagories.length > 0) return;
    fetchCatagoriesStart();
  }, []);

  const categoryKey = Object.keys(categoryMap);
  function getPreviews(categoryKey: string) {
    return categoryMap[categoryKey].filter((_, id) => id < 4);
  }
  return (
    <div className="w-full h-full">
      {isLoading ? (
        <Spinier />
      ) : (
        categoryKey.map((key) => {
          return (
            <ContainerProduct
              key={key}
              title={key}
              products={getPreviews(key)}
              isPreviews
            />
          );
        })
      )}
    </div>
  );
};

export default Previews;
