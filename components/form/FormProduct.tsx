'use client'

import { CategoryForm, CreateProductDto, PresentationForm } from "@/interface/product/product";
import { getAllCategoryForm, getAllPresentationForm } from "@/lib/fetch/product/fetchProduct";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>();
  const [categorys, setCategorys] = useState<CategoryForm[]>([]);
  const [presentation, setPresentation] = useState<PresentationForm[]>([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryData, presentationData] = await Promise.all([
          getAllCategoryForm(),
          getAllPresentationForm(),
        ]);
  
        setCategorys(categoryData);
        setPresentation(presentationData);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  

  const onSubmit = (data: CreateProductDto) => {
    console.log(data);
  };
  return (
    <form className="bg-blue-gray-500a p-4">
      <div className="mb-4">
        <label htmlFor="barcode">Codigo de barra</label>
        <input
          className="p-2 w-full bg-blue-gray-200"
          {...register('barcode', {
            required: 'El codigo es obligatorio',
            valueAsNumber: true,
          })}
        />
        {errors.barcode && <p className="text-red-500">{errors.barcode.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="name">Nombre Producto</label>
        <input
          className="p-2 w-full bg-blue-gray-200"
          {...register('name', {
            required: 'El nombre es obligatorio',
            minLength: {
              value: 3,
              message: 'El nombre debe tener al menos 3 caracter',
            },
            maxLength: {
              value: 50,
              message: 'El nombre no puede exceder los 50 caracteres',
            },
          })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col">
          <label htmlFor="category">Elija categoria</label>
          <select
            className="p-2"
            {...register('category_id', { required: true })}
          >
            {categorys.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category_id && (
            <p className="text-red-500">{errors.category_id.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">Elija presentacion</label>
          <select
            className="p-2"
            {...register('presentation_id', { required: true })}
          >
            {presentation.map((presentation) => (
              <option key={presentation.id} value={presentation.id}>
                {presentation.name}
              </option>
            ))}
          </select>
          {errors.category_id && (
            <p className="text-red-500">{errors.category_id.message}</p>
          )}
        </div>
      <div className="flex flex-col ">
        <button className="p-2 m-2 bg-slate-500 rounded" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default FormProduct