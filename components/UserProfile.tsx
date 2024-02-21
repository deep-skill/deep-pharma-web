'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react'

export const UserProfile = () => {
    const { user } = useUser();

     return (
        <div className="flex flex-col p-5 space-y-7">
            <div>
                <h1 className="text-2xl font-bold mb-2 text-orange">Mis datos</h1>
                <div className="border-b border-orange"></div>
            </div>
            <div className="relative ">
                <p className="text-sm font-regular mt-4 text-dark_gray">{user?.name}</p>
                <p className="absolute top-0  text-xs font-regular text-orange">Nombre completo del administrador</p>
            </div>
            <div className="relative">
                <p className="text-sm font-regular mt-4 text-dark_gray">MiFarma</p>
                <p className="absolute top-0  text-xs font-regular text-orange">Nombre de la botica</p>
            </div>
            <div className="relative">
                <p className="text-sm font-regular mt-4 text-dark_gray">{user?.email}</p>
                <p className="absolute top-0  text-xs font-regular text-orange">Correo</p>
            </div>
            <div className="relative">
                <p className="text-sm font-regular mt-4 text-dark_gray">985958958</p>
                <p className="absolute top-0  text-xs font-regular text-orange">Celular</p>
            </div>
            <div className="relative">
                <p className="text-sm font-regular mt-4 text-dark_gray">505505050050</p>
                <p className="absolute top-0  text-xs font-regular text-orange">RUC</p>
            </div>
            <div className="relative">
                <p className="text-sm font-regular mt-4 text-dark_gray">***********</p>
                <p className="absolute top-0  text-xs font-regular text-orange">Contraseña</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button className='w-full p-2 text-white bg-orange rounded-full font-medium drop-shadow-xl'>Volver al inicio</button>
                <a href="/api/auth/logout" className="text-orange font-semibold underline p-8">Cerrar sesión</a>
            </div>
        </div>
    );

}

export default UserProfile;

