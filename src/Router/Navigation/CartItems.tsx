import style from "./style/CartItems.module.scss";

interface ICartItems {
  cartItem: {
    name: string;
    quantity: number;
    imageUrl: string;
    price: number;
  };
}
export function CartItem({ cartItem }: ICartItems) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className={style["cart-item-container"]}>
      <img src={imageUrl} alt={name} />
      <div className={style["item-details"]}>
        <h2 className={style.name}>{name}</h2>
        <span className={style.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
