'use client'

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface DialogCreatedProductProps {
  onClose: () => void;
  onOpen: boolean;
}

export function DialogCreatedProduct({ onClose , onOpen}: DialogCreatedProductProps) {
  const [open, setOpen] = React.useState(onOpen);


  const handleOpen = () => {
    
    setOpen(!open)
  }

  return (
    <>
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