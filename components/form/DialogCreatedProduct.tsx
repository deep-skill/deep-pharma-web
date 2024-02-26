'use client';

import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
const boxShadowStyle = '0px 4px 4px 2px rgba(0, 0, 0, 0.25)';

interface DialogCreatedProductProps {
  onClose: () => void;
  onOpen: boolean;
}

export function DialogCreatedProduct({
  onClose,
  onOpen,
}: DialogCreatedProductProps) {
  const [open, setOpen] = React.useState(onOpen);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        placeholder={undefined}
        style={{ boxShadow: boxShadowStyle }}
      >
        <DialogHeader
          className="px-5 mt-1 text-lg text-orange"
          placeholder={undefined}
        >
          Confirmación
        </DialogHeader>
        <DialogBody className="px-5 mt-1" placeholder={undefined}>
          Producto creado con éxito
        </DialogBody>
        <DialogFooter
          placeholder={undefined}
          className="flex flex-row justify-between"
        >
          <Button
            variant="gradient"
            color="orange"
            onClick={handleOpen}
            className="w-30 text-orange"
            placeholder={undefined}
          >
            Volver al home
          </Button>
          <Button
            variant="gradient"
            onClick={handleOpen}
            placeholder={undefined}
            className="w-30 text-orange"
          >
            Agregar lote
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
