'use client'

import { fetchToken } from "@/lib/fetch/fetchToken";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";

const GetToken = () => {
    const { user, error, isLoading } = useUser();

    useEffect(() => {
      const getToken = async () => {
        if (user) {
          try {
            await fetchToken();
          } catch (err) {
            console.error('Error al obtener el token:', err);
          }
        }
      };
  
      getToken();
    }, [user]);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div>
            <div>{user?.name}</div>
            <div>{user?.email}</div>
        </div>
    );
};

export default GetToken;