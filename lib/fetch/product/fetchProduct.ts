'use server'
import { CategoryForm, PresentationForm } from "@/interface/product/product";


export const getAllCategoryForm = async (): Promise<CategoryForm[]> => {
    //const cookieStore = cookies()
    //const token = cookieStore.get('authToken')
    try {
      const res = await fetch(
        `http://localhost:3001/category`,
        { cache: 'force-cache' }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return [] ;
    }
  }

  export const getAllPresentationForm = async (): Promise<PresentationForm[]> => {
    //const cookieStore = cookies()
    //const token = cookieStore.get('authToken')
    try {
      const res = await fetch(
        `http://localhost:3001/presentation`,
        { cache: 'force-cache' }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return [] ;
    }
  }