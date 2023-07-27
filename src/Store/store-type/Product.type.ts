export type Product = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};
export type ProductMap = { [title: string]: Product[] };
export interface IProductContext {
  cataGoriesMap: ProductMap;
  fetchCatagories: () => void;
}
