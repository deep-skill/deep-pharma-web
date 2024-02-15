'use server'

import { CreateProductDto } from "@/interface/product/product";
import { revalidateTag } from "next/cache";

//import { cookies } from "next/headers";

export const createProduct = async (createProduct: CreateProductDto) => {
    //const cookieStore = cookies()
    //const token = cookieStore.get('authToken')
    console.log(createProduct)
    const body = JSON.stringify(createProduct);
  
    try {
      const res = await fetch(`http://localhost:3001/product`, {
        method: 'POST',
        body: body,
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await res.json();
      revalidateTag('getAllProduct')
      return data;
    } catch (error) {
      console.log(error);
      return {};
    }
  };