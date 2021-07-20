import { ErrorObject } from "./../interfaces/common";
import { Product, ProductParams } from "./../interfaces/products";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($params: ProductParams!) {
    createProduct(input: $params) {
      success
      errors {
        key
        message
      }
      product {
        id
      }
    }
  }
`;

export interface CreateProductVariables {
  params: ProductParams;
}

export interface CreateProductResult {
  createProduct: {
    success: boolean;
    errors: ErrorObject[];
    product: Product | null;
  };
}

export const useCreateProductMutation = () =>
  useMutation<CreateProductResult, CreateProductVariables>(CREATE_PRODUCT);
