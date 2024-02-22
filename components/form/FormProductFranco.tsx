'use client';

import {
  BrandForm,
  CategoryForm,
  CreateProductDto,
  DrugForm,
  PresentationForm,
} from '@/interface/product/product';
import {
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
  const [drugs, setDrugs] = useState<DrugForm[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryData, drugData] =
          await Promise.all([
            getAllCategoryForm(),
            getAllDrugForm(),
          ]);
        setCategorys(categoryData);
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

  const [selectedBrand, setSelectedBrand] = useState<BrandForm | null>(null);
  const [selectedPresentation, setSelectedPresentation] = useState<PresentationForm | null>(null);
  const handleBrandSelect = (brand: BrandForm) => {
    setValue('brand_id', brand.id);
    setSelectedBrand(brand);
  };

  const handlePresentationSelect = (presentation: PresentationForm) => {
    setValue('presentation_id', presentation.id);
    setSelectedPresentation(presentation);
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
          className="p-2"
          {...register('category_id', {
            required: 'Seleccione una categoría',
            valueAsNumber: true,
          })}
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
      {/* <div className="flex flex-col">
        <label htmlFor="brand">Elija marca</label>
        <select
          className="p-2"
          {...register('brand_id', {
            required: 'Seleccione una marca',
            valueAsNumber: true,
          })}
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
      </div> */}
      {/* <div className="flex flex-col">
        <label htmlFor="drug">Elija droga</label>
        <select
          className="p-2"
          {...register('drug_id', {
            required: 'Seleccione una categoría',
            valueAsNumber: true,
          })}
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
      </div> */}
      <div className="flex flex-row">
        <input type="checkbox" {...register('prescription_required')} />
        <p>Requiere prescripcion?</p>
      </div>
      <div className="flex flex-row">
        <input type="checkbox" {...register('is_fractionable')} />
        <p>Es fracionable?</p>
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
