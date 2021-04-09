import React from "react";
import { useGetCategoryQuery } from "../api/queries/categories";
import { Link, useParams } from "react-router-dom";
import { ShowParams } from "../api/interfaces/common";

const CategoryView = () => {
  const { id } = useParams<ShowParams>();
  const { data, loading, error } = useGetCategoryQuery(id);
  if (loading) {
    return <h1>loading...</h1>;
  }

  const category = data?.category;
  return (
    <div>
      <h1>Category View: {category?.name}</h1>
      <Link to="/">返回首頁</Link>
      <section>
        {error ? <h1>error: {JSON.stringify(error)}</h1> : null}
        {data
          ? data.category?.products.map((p) => {
              return (
                <div key={p.id}>
                  <h2>{p.name}</h2>
                  <p>{p.basePrice}</p>
                  <img src={p.imageUrl} alt="" />
                </div>
              );
            })
          : null}
      </section>
    </div>
  );
};

export default CategoryView;
