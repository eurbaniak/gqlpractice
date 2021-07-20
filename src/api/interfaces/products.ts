import { ID } from "./common";

export interface Product {
  id: ID;
  name: string;
  basePrice: number;
  imageUrl: string;
}

export interface ProductParams {
  productTypeId?: ID;
  basePrice?: string;
  name?: string;
  slug?: string;
  stock?: number;
  attributes?: Record<string, any>;
  prices?: {
    amount: number;
    priceType: string;
  }[];
  additionalRules?: string;
}
