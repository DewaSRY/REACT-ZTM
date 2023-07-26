import { ProductItems } from "./Cart.Type";
export const addCartItem = (items: ProductItems[], product: ProductItems) => {
  const existingCartItem = items.find((Item) => Item.id === product.id);
  if (existingCartItem) {
    return items.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...product, quantity: 1 }];
};
export const removeCartItem = (
  items: ProductItems[],
  product: ProductItems
) => {
  const existingCartItem = items.find((Item) => Item.id === product.id);
  if (existingCartItem?.quantity === 1) {
    return items.filter((item) => item.id !== product.id);
  }
  return items.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
export const clearCartItem = (items: ProductItems[], product: ProductItems) => {
  const existingCartItem = items.find((Item) => Item.id === product.id);
  if (existingCartItem) {
    return items.filter((item) => item.id !== product.id);
  }
};
