export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type CartItem = CategoryItem & {
  quantity: number;
};

export type Categories = {
  title: string;
  items: CategoryItem[];
};
