import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const LIST_CATEGORIES_QUERY = gql`
  {
    categories {
      id
      name
    }
  }
`;

const CategoryList = () => {
  const { data, loading } = useQuery(LIST_CATEGORIES_QUERY);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {loading
          ? null
          : data.categories.map((c: any) => {
              return (
                <li key={c.id}>
                  <Link to={`/category/${c.id}`}>{c.name}</Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default CategoryList;
