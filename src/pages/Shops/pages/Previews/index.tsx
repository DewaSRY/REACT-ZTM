import { useSelectors } from "@feature/store";
import { FC } from "react";
import Spinier from "@common/Spinier";
import ContainerProduct from "@/pages/Shops/containers/ContainerProduct";

const Previews: FC = () => {
  const { isLoading, categoryMap } = useSelectors((s) => s.catagories);

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
