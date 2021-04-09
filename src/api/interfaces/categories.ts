import { Product } from "./products";
import { ID } from "./common";

export interface Category {
  id: ID;
  name: string;
  products: Product[];
}
