import { Presentation } from "@/interface/presentation/presentation";
//import { cookies } from "next/headers";

export const getAllPresentation = async (): Promise<Presentation[]> => {
    //const cookieStore = cookies()
    //const token = cookieStore.get('authToken')
    try {
      const res = await fetch(
        `http://localhost:3001/presentation`,
        {
          next: {
            revalidate: 60,
            tags: ['getAllPresentation']
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