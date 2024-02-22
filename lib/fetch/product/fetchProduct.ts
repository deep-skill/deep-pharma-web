'use server';
import {
  BrandForm,
  CategoryForm,
  DrugForm,
  PresentationForm,
} from '@/interface/product/product';

export const getAllCategoryForm = async (): Promise<CategoryForm[]> => {
  //const cookieStore = cookies()
  //const token = cookieStore.get('authToken')
  try {
    const res = await fetch(
      `http://localhost:3001/category/select-create-product`,
      { cache: 'force-cache' },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllPresentationForm = async (
  query: string,
): Promise<PresentationForm[]> => {
  //const cookieStore = cookies()
  //const token = cookieStore.get('authToken')
  try {
    const res = await fetch(
      `http://localhost:3001/presentation/select-create-product?query=${query}`,
      { cache: 'force-cache' },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllBrandForm = async (): Promise<BrandForm[]> => {
  //const cookieStore = cookies()
  //const token = cookieStore.get('authToken')
  try {
    const res = await fetch(
      `http://localhost:3001/brand/select-create-product`,
      { cache: 'force-cache' },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getAllDrugForm = async (): Promise<DrugForm[]> => {
  //const cookieStore = cookies()
  //const token = cookieStore.get('authToken')
  try {
    const res = await fetch(
      `http://localhost:3001/drug/select-create-product`,
      { cache: 'force-cache' },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getCheckBarcode = async (query: number): Promise<boolean> => {
  try {
    const res = await fetch(
      `http://localhost:3001/product/codebar?query=${query}`,
      { cache: 'force-cache' },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
