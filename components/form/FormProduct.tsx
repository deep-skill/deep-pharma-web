'use client'

import { BrandForm, CategoryForm, CreateProductDto, PresentationForm } from "@/interface/product/product";
import { getAllBrandForm, getAllCategoryForm, getAllDrugForm, getAllPresentationForm } from "@/lib/fetch/product/fetchProduct";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>();
  const [categorys, setCategorys] = useState<CategoryForm[]>([]);
  const [presentations, setPresentations] = useState<PresentationForm[]>([]);
  const [brands, setBrands] = useState<BrandForm[]>([]);
  const [drugs, setDrugs] = useState<BrandForm[]>([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryData, presentationData, brandData, drugData] = await Promise.all([
          getAllCategoryForm(),
          getAllPresentationForm(),
          getAllBrandForm(),
          getAllDrugForm(),
        ]);

        setBrands(brandData);
        setCategorys(categoryData);
        setPresentations(presentationData);
        setDrugs(drugData);
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
          <label htmlFor="presentacion">Elija presentacion</label>
          <select
            className="p-2"
            {...register('presentation_id', { required: true })}
          >
            {presentations.map((presentation) => (
              <option key={presentation.id} value={presentation.id}>
                {presentation.name}
              </option>
            ))}
          </select>
          {errors.presentation_id && (
            <p className="text-red-500">{errors.presentation_id.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="brand">Elija marca</label>
          <select
            className="p-2"
            {...register('brand_id', { required: true })}
          >
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
          {errors.brand_id && (
            <p className="text-red-500">{errors.brand_id.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="drug">Elija droga</label>
          <select
            className="p-2"
            {...register('drug_id', { required: true })}
          >
            {drugs.map((drug) => (
              <option key={drug.id} value={drug.id}>
                {drug.name}
              </option>
            ))}
          </select>
          {errors.drug_id && (
            <p className="text-red-500">{errors.drug_id.message}</p>
          )}
        </div>
        <div className="flex flex-row">
          <input type="checkbox" {...register('prescription_required')} />
          <p>Requiere prescripcion?</p>
        </div>
        <div className="flex flex-row">
          <input type="checkbox" {...register('is_fractionable')} />
          <p>Es fracionable?</p>
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