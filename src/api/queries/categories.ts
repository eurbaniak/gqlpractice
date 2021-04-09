import { Category } from "./../interfaces/categories";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { ID } from "../interfaces/common";

export const GET_CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      id
      name
      products {
        id
        name
        basePrice
        imageUrl
      }
    }
  }
`;

export interface GetCategoryResult {
  category: Category | null;
}

export interface GetCategoryVariables {
  id: ID;
}

export const useGetCategoryQuery = (id: ID) =>
  useQuery<GetCategoryResult, GetCategoryVariables>(GET_CATEGORY, {
    variables: { id },
  });
