import { Type } from "@/interface/type/type";


export const getAllType = async (): Promise<Type[]> => {
    //const cookieStore = cookies()
    //const token = cookieStore.get('authToken')
    try {
      const res = await fetch(
        `http://localhost:3001/type`,
        {
          next: {
            revalidate: 60,
            tags: ['getAllType']
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