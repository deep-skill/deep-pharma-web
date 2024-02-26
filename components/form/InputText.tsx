import React, { HTMLInputTypeAttribute } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

// componente usado para busqueda por texto, donde el icono de la derecha marca con un icono de X o de tilde si el input es correcto/permitido
// me falta saber como hacer:
// como enviar la url del enpoint,si se tiene que pasar como props en este mismo componente o se saca desde el pathName
// como enviar los params y como recibir la respuesta de la request

//algunas screen tienen un background blanco (white-background en tailwind.config.ts) o uno light_grey (tambien en el config)
interface Props {
  placeholder: string;
  isFullWidth: boolean;
  label: string;
  title?: string;
  type: HTMLInputTypeAttribute;
}
const InputText = ({ placeholder, isFullWidth, label, title, type }: Props) => {
  return (
    <div className={` ${isFullWidth ? 'w-full' : 'w-1/2'}`}>
      <div className="relative m-[5%]">
        <label htmlFor="search" className="sr-only">
          {label}
        </label>
        <div>
          <input
            type={type}
            name="search"
            id="search"
            className="h-16 flex  w-full rounded-t-md bg-light_grey border-b-2 border-orange pl-3 text-md text-black placeholder:text-black outline-none"
            placeholder={placeholder}
            // defaultValue={searchParams.get('query')?.toString()}
            // onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/* {!isPending && ( */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
          <IoMdCloseCircleOutline
            className="mr-3 h-4 w-4 text-orange"
            aria-hidden="true"
          />
        </div>
        {/* )} */}

        {/* {isPending && (
          <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default InputText;
