'use client';

import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
const boxShadowStyle = '0px 4px 4px 2px rgba(0, 0, 0, 0.25)';

export function DialogCancelNewProduct() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className=" align-middle select-none font-sans font-bold text-center text-sm py-3 px-6 h-10 bg-light_orange text-orange w-2/5 shadow-custom hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none rounded-full"
      >
        Cancelar
      </button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        style={{ boxShadow: boxShadowStyle }}
        className="flex flex-col"
      >
        <DialogHeader
          className="px-5 mt-1 text-lg  text-orange"
          placeholder={undefined}
        >
          Confirmacion
        </DialogHeader>
        <DialogBody className="px-5 text-sm mt-1" placeholder={undefined}>
          ¿Estás seguro que deseas cancelar la creación de un producto? Se
          borrarán los datos que hayas ingresado.
        </DialogBody>
        <DialogFooter placeholder={undefined}>
          <Button
            variant="gradient"
            onClick={handleOpen}
            placeholder={undefined}
            className=" text-orange"
          >
            <span>Aceptar</span>
          </Button>
          <Button
            variant="gradient"
            onClick={handleOpen}
            placeholder={undefined}
            className=" text-orange"
          >
            <span>Seguir editando</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
