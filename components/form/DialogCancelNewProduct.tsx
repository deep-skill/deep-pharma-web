'use client'

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export function DialogCancelNewProduct() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen} className=" align-middle select-none font-sans font-bold text-center text-sm py-3 px-6 bg-orange text-white shadow-custom hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none rounded-full">
        Cancelar
      </button>
      <Dialog open={open} handler={handleOpen} placeholder={undefined}>
        <DialogHeader placeholder={undefined}>Confirmacion</DialogHeader>
        <DialogBody placeholder={undefined}>
          Producto creado de manera exitosa
        </DialogBody>
        <DialogFooter placeholder={undefined}>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1" placeholder={undefined}          >
            <span>Volver Al home</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen} placeholder={undefined}>
            <span>Agregar nuevo lote</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}