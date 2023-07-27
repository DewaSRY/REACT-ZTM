export type product = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};
export type ProductMap = { [title: string]: product[] };
export interface IProductContext {
  cataGoriesMap: ProductMap;
  fetchCatagories: () => void;
}
