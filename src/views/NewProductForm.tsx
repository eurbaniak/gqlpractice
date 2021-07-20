import React from "react";
import { useForm } from "react-hook-form";
import { ProductParams } from "../api/interfaces/products";
import { useCreateProductMutation } from "../api/mutations/products";
import Input from "../components/Input";

const NewProductForm = () => {
  const [mutate] = useCreateProductMutation();
  const { register, handleSubmit } = useForm<Partial<ProductParams>>();
  const onSubmit = (data: ProductParams) => {
    mutate({ variables: { params: { ...data, productTypeId: 1 } } });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" label="name" register={register} />
      <Input name="basePrice" label="base price" register={register} />
      <Input name="slug" label="slug" register={register} />
      <button type="submit">submit</button>
    </form>
  );
};

export default NewProductForm;
