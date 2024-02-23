'use client';

import {
  BrandForm,
  CategoryForm,
  CreateProductDto,
  DrugForm,
  PresentationForm,
} from '@/interface/product/product';
import {
  createdProduct,
  getAllBrandForm,
  getAllCategoryForm,
  getAllDrugForm,
  getAllPresentationForm,
  getCheckBarcode,
} from '@/lib/fetch/product/fetchProduct';
import { Input } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgDanger } from 'react-icons/cg';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import InputSelectComponent from './InputSelectComponent';
import { useRouter } from 'next/navigation';

const FormProductFranco = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateProductDto>();
  const [categorys, setCategorys] = useState<CategoryForm[]>([]);
  const [input, setInput] = useState('');
  const [inputIsCorrect, setInputIsCorrect] = useState<null | boolean>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getAllCategoryForm();
        setCategorys(categoryData);
        setValue('created_by', 1)
        setValue('prescription_required', false)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



  const onSubmit = async (data: CreateProductDto) => {
    console.log(data);

    try {
      const product = await createdProduct(data);
      console.log(product)
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedBrand, setSelectedBrand] = useState<BrandForm | null>(null);
  const [selectedPresentation, setSelectedPresentation] = useState<PresentationForm | null>(null);
  const [selectedDrug, setSelectedDrug] = useState<DrugForm | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
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

  const handleCategorySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategoryId = parseInt(event.target.value);
    setValue('category_id', selectedCategoryId);
    setSelectedCategory(selectedCategoryId);
  };

  const handleInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    try {
      const result = await getCheckBarcode(Number(event.target.value));
      setInputIsCorrect(result);
      return result;
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  return (
    <form className="bg-blue-gray-500a p-4">
      <div className="relative h-24  flex items-start ">
        <div
          className={`flex w-full flex-col gap-6 pt-4 px-2 bg-light_grey ${inputIsCorrect ? 'text-orange' : 'text-red-500 border-red-700'
            }`}
        >
          <Input
            variant="static"
            label="Código de barras*"
            type="number"
            value={input}
            placeholder="000000"
            crossOrigin={undefined}
            {...register('barcode', {
              minLength: {
                value: 6,
                message: 'El código de barras tiene que tener 6 dígitos',
              },
              required: 'El codigo de barras es obligatorio',
              valueAsNumber: true,
              onChange: handleInput,
              validate: (value) =>
                !isNaN(value) || 'Ingrese un valor numérico válido',
            })}
          />
          {inputIsCorrect === null || inputIsCorrect === true ? (
            <IoMdCloseCircleOutline
              size={25}
              className={`text-orange absolute bottom-14 right-3`}
            />
          ) : (
            <CgDanger
              size={25}
              className={`text-red-500 absolute bottom-14 right-3`}
            />
          )}
        </div>
        {(errors.barcode || inputIsCorrect === false) && (
          <p className="text-red-500 absolute bottom-2 left-3">
            {errors.barcode?.message}
            {!inputIsCorrect && 'el codigo ya existe'}
          </p>
        )}
      </div>

      <div className="relative h-24  flex items-start ">
        <div
          className={`flex w-full flex-col gap-6 pt-4 px-2  bg-light_grey ${errors.name == undefined ? 'text-orange' : 'text-red-500'
            }`}
        >
          <Input
            variant="static"
            label="Nombre del producto*"
            type="text"
            placeholder="XXXXXXXXXXXXXXXX"
            crossOrigin={undefined}
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
          {errors.name == undefined ? (
            <IoMdCloseCircleOutline
              size={25}
              className={`text-orange absolute bottom-14 right-3`}
            />
          ) : (
            <CgDanger
              size={25}
              className={`text-red-500 absolute bottom-14 right-3`}
            />
          )}
        </div>
        {errors.name && (
          <p className="text-red-500 absolute bottom-2 left-3">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="relative h-24  flex items-start ">
        <div
          className={`flex w-full flex-col gap-6 pt-4 px-2  bg-light_grey ${errors.description == undefined ? 'text-orange' : 'text-red-500'
            }`}
        >
          <Input
            variant="static"
            label="Descripcion del producto*"
            type="text"
            placeholder="el producto es..."
            crossOrigin={undefined}
            {...register('description', {
              required: 'El description es obligatorio',
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
          {errors.description == undefined ? (
            <IoMdCloseCircleOutline
              size={25}
              className={`text-orange absolute bottom-14 right-3`}
            />
          ) : (
            <CgDanger
              size={25}
              className={`text-red-500 absolute bottom-14 right-3`}
            />
          )}
        </div>
        {errors.description && (
          <p className="text-red-500 absolute bottom-2 left-3">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="category">Elija categoria</label>
        <select
          className="h-10 block w-full rounded-t-md bg-gray border-b-2 border-orange text-md text-black placeholder:text-black outline-none"
          onChange={handleCategorySelect}
          value={selectedCategory || ''}
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
      {
        selectedCategory === 1 && <InputSelectComponent
          label="Elija Droga"
          placeholder="Droga"
          fetchOptions={getAllDrugForm}
          onSelect={handleDrugSelect}
          selectedValue={selectedDrug}
          error={errors.drug_id?.message}
          textSelect="Droga elegida"
        />
      }
      {
        selectedCategory === 1 && <div className="flex flex-row">
          <input type="checkbox" {...register('prescription_required')} />
          <p>Requiere prescripcion?</p>
        </div>
      }

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
          })} />
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
