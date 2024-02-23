'use client';

import {
  BrandForm,
  CategoryForm,
  CreateProductDto,
  DrugForm,
  PresentationForm,
} from '@/interface/product/product';
import {
  CreatedProduct,
  getAllBrandForm,
  getAllCategoryForm,
  getAllDrugForm,
  getAllPresentationForm,
} from '@/lib/fetch/product/fetchProduct';
import { Input} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseCircle } from 'react-icons/io5';
import InputSelectComponent from './InputSelectComponent';


const FormProductFranco = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateProductDto>();
  const [categorys, setCategorys] = useState<CategoryForm[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData =await getAllCategoryForm();
        setCategorys(categoryData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (data: CreateProductDto) => {
    setValue('created_by', 1)
    try {
      const product = await CreatedProduct(data);
      console.log(product)
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedBrand, setSelectedBrand] = useState<BrandForm | null>(null);
  const [selectedPresentation, setSelectedPresentation] = useState<PresentationForm | null>(null);
  const [selectedDrug, setSelectedDrug] = useState<DrugForm | null>(null);
  const handleBrandSelect = (brand: BrandForm) => {
    setValue('brand_id', brand.id);
    setSelectedBrand(brand);
  };

  const handlePresentationSelect = (presentation: PresentationForm) => {
    setValue('presentation_id', presentation.id);
    setSelectedPresentation(presentation);
  };

  const handleDrugSelect = (drug: DrugForm) => {
    setValue('drug_id', drug.id);
    setSelectedDrug(drug);
  };

  return (
    <form className="bg-blue-gray-500a p-4">
      <div className="mb-4">
        <label htmlFor="barcode">Codigo de barra</label>
        <Input
          variant="static"
          label="Static"
          type="number"
          placeholder="Static"
          icon={<IoCloseCircle />}
          crossOrigin={undefined}
          error={errors.barcode && true}
          {...register('barcode', {
            required: 'El código es obligatorio',
            valueAsNumber: true,
            validate: (value) =>
              !isNaN(value) || 'Ingrese un valor numérico válido',
          })}
        />
        {errors.barcode && (
          <p className="text-red-500">{errors.barcode.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="name">Nombre Producto</label>
        <input
          className="p-2 w-full bg-blue-gray-200"
          {...register('name', {
            // required: 'El nombre es obligatorio',
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
      <div className="mb-4">
        <label htmlFor="description">Producto descripcion</label>
        <input
          className="p-2 w-full bg-blue-gray-200"
          {...register('description', {
            // required: 'El description es obligatorio',
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
          className="h-10 block w-full rounded-t-md bg-gray border-b-2 border-orange text-md text-black placeholder:text-black outline-none"
          {...register('category_id', {
            required: 'Seleccione una categoría',
            valueAsNumber: true,
          })}
        >
          <option value="" >Seleccione Categoría</option>
          {categorys.map((category) => (
            <option 
            key={category.id} 
            value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
        {errors.category_id && (
          <p className="text-red-500">{errors.category_id.message}</p>
        )}
      </div>
      <InputSelectComponent
        label="Elija Presetacion"
        placeholder="Presentacion"
        fetchOptions={getAllPresentationForm}
        onSelect={handlePresentationSelect}
        selectedValue={selectedPresentation}
        error={errors.presentation_id?.message}
        textSelect="Presetacion elegida"
      />
      <InputSelectComponent
        label="Elija marca"
        placeholder="Marca"
        fetchOptions={getAllBrandForm}
        onSelect={handleBrandSelect}
        selectedValue={selectedBrand}
        error={errors.brand_id?.message}
        textSelect="Marca elegida"
      />
       <InputSelectComponent
        label="Elija Droga"
        placeholder="Droga"
        fetchOptions={getAllDrugForm}
        onSelect={handleDrugSelect}
        selectedValue={selectedDrug}
        error={errors.drug_id?.message}
        textSelect="Droga elegida"
      />
      <div className="flex flex-row">
        <input type="checkbox" {...register('prescription_required')} />
        <p>Requiere prescripcion?</p>
      </div>
      <div className="flex flex-row">
        <input type="checkbox" {...register('is_fractionable')} />
        <p>Es fracionable?</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p>Precio de venta sugerido</p>
        <input 
        type="number" 
        className="h-10 block w-full rounded-t-md bg-gray border-b-2 border-orange text-md text-black placeholder:text-black outline-none"
        {...register('new_price', {
            required: 'El precio es obligatorio',
            valueAsNumber: true,
            validate: (value) =>
              !isNaN(value) || 'Ingrese un valor numérico válido',
          })}/>
      </div>
      <div className="flex flex-col ">
        <button
          className="p-2 m-2 bg-slate-500 rounded"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormProductFranco;
