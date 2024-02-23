"use client"
import { Input } from '@material-tailwind/react';
import React from 'react';

const CreateProduct = () => {
  return (
    <section className="flex flex-col ">
      <h1>Crear nuevo producto</h1>
      <Input
        variant="static"
        label="Static"
        placeholder="Static"
        crossOrigin={undefined}
      />
    </section>
  );
};

export default CreateProduct;
