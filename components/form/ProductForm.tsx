'use client'

import { Brand } from "@/interface/brand/brand";
import { getAllBrand } from "@/lib/fetch/brand/brand";
import { Input, Select, Option, Checkbox, Button  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

const ProductForm = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchDataBrand = async () => {
      try {
        const brandsData = await getAllBrand();
        setBrands(brandsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataBrand();
  }, [])
  console.log(brands)
  return (
    <form className="flex flex-col gap-4 justify-center items-center p-4">
      <div className="">
        <Input label="Codigo de barras*" crossOrigin={undefined} />
      </div>
      <div className="">
        <Input label="Nombre del producto*" crossOrigin={undefined} />
      </div>
      <div className="">
      <Select label="Categoria*" placeholder={undefined} >
        <Option >Farmacos</Option>
        <Option>Higiene personal</Option>
        <Option>Otros</Option>
      </Select>
    </div>
    <div className="">
      <Select label="Presentacion*" placeholder={undefined} >
        <Option>Tableta 10 mg</Option>
        <Option>Gotas 20 ml</Option>
        <Option>Otros</Option>
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
    <Button placeholder={undefined} color="orange">Guardar</Button>
    <Button placeholder={undefined}>Cancelar</Button>
    </form>
  );
};
    
export default ProductForm;