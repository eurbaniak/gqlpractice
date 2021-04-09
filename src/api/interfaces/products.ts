import { ID } from "./common";

export interface Product {
  id: ID;
  name: string;
  basePrice: number;
  imageUrl: string;
}
