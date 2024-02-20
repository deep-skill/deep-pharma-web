import { Category } from "@/interface/category/category";


export const getAllCategory = async (): Promise<Category[]> => {
    //const cookieStore = cookies()
    //const token = cookieStore.get('authToken')
    try {
      const res = await fetch(
        `http://localhost:3001/category`,
        {
          next: {
            revalidate: 60,
            tags: ['getAllCategory']
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