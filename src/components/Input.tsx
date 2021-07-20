import React, { HTMLProps } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends HTMLProps<HTMLInputElement> {
  name: string;
  label: string;
  register: (name: any) => UseFormRegisterReturn;
}

const Input = ({ label, id, name, register, ...rest }: Props) => {
  return (
    <div>
      <label htmlFor={id || name}>{label}</label>
      <input type="text" id={id || name} {...register(name)} {...rest} />
    </div>
  );
};

export default Input;
