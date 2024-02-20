'use client'

import { Brand } from "@/interface/brand/brand";
import { Presentation } from "@/interface/presentation/presentation";
import { CreateProductDto } from "@/interface/product/product";
import { Category } from "@/interface/category/category";
import { getAllBrand } from "@/lib/fetch/brand/brand";
import { getAllPresentation } from "@/lib/fetch/presentation/presentation";
import { getAllCategory } from "@/lib/fetch/category/category";
import { Input, Select, Option, Checkbox, Button  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ProductForm = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [presentation, setPresentation] = useState<Presentation[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>();

  const onSubmit = (data: CreateProductDto) => {
    console.log(data);
    //createProduct(data);
  };

  useEffect(() => {
    const fetchDataBrand = async () => {
      try {
        const brandsData = await getAllBrand();
        setBrands(brandsData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDataPresentation = async () => {
      try {
        const presentationData = await getAllPresentation();
        setPresentation(presentationData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDataType = async () => {
      try {
        const categoryData = await getAllCategory();
        setCategory(categoryData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataType();
    fetchDataPresentation();
    fetchDataBrand();
  }, [])
  

  return (
    <form className="flex flex-col gap-4 justify-center items-center p-4" >
      <div className="">
        <Input label="Codigo de barras*" crossOrigin={undefined} {...register('product_id', {
              required: 'El codigo de barras es obligatorio',
              valueAsNumber: true

            })}/>
            {errors.product_id && <p className="text-red-500">{errors.product_id.message}</p>}
      </div>
      <div className="">
        <Input label="Nombre del producto*" crossOrigin={undefined} {...register('name', {
              required: 'El nombre es obligatorio',
              minLength: {
                value: 3,
                message: 'El nombre debe tener al menos 3 caracter',
              },
              maxLength: {
                value: 20,
                message: 'El nombre no puede exceder los 20 caracteres',
              }
            })}/>
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="">
      <Select label="Categoria*" placeholder={undefined} >
        {
          category.map((category) => (
            <Option key={category.id} value={category.id.toString()}>{category.name}</Option>
          ))
        }
      </Select>
    </div>
    <div className="">
      <Select label="Presentacion*" placeholder={undefined} >
        {
          presentation.map((presentation) => (
            <Option key={presentation.id} >{presentation.name}
            </Option>
          ))
        }
      </Select>
    </div>
    <div className="">
      <Select label="Marca*" placeholder={undefined} >
        {
          brands.map((brand) => (
            <Option key={brand.id}>{brand.name}</Option>
          ))
        }
      </Select>
    </div>
    <Checkbox label="Producto controlado" crossOrigin={undefined} />
    <Checkbox label="fraccionable" crossOrigin={undefined} />
    <div className="flex">
      <p>Precio de venta unitario</p>
      <Input label="Precio*" crossOrigin={undefined}/>
    </div>
    <Button placeholder={undefined} color="orange" onClick={handleSubmit(onSubmit)}>Guardar</Button>
    <Button placeholder={undefined}>Cancelar</Button>
    </form>
  );
};
    
export default ProductForm;