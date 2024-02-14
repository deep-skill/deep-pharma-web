import { Brand } from "@/interface/brand/brand";
//import { cookies } from "next/headers";

export const getAllBrand = async (): Promise<Brand[]> => {
    //const cookieStore = cookies()
    //const token = cookieStore.get('authToken')
    try {
      const res = await fetch(
        `http://localhost:3001/brand`,
        {
          next: {
            revalidate: 60,
            tags: ['getAllBrand']
          }
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return [] ;
    }
  }