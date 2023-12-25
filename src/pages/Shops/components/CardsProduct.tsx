import { CategoryItem } from "@/utils/typeUtil";
import Button from "@common/Button";
import { useDispatchAction } from "@feature/store";

import { FC, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  items: CategoryItem;
}
type CardComponents = FC<CardProps>;
const Card: CardComponents = ({ items, ...resProps }) => {
  const { addCartItem } = useDispatchAction();
  const { imageUrl, price, name } = items;
  const handleClick = () => () => {
    addCartItem(items);
  };

  return (
    <div
      {...resProps}
      className={
        "w-full flex flex-col h-[21rem]" +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      <img
        className="w-full h-5/6 object-cover mb-1"
        src={imageUrl}
        alt={name}
      />
      <div className="w-full flex justify-between">
        <span>{name}</span>
        <span>${price}</span>
      </div>
      <Button onClick={handleClick()}>Add Item</Button>
    </div>
  );
};
export default Card;
