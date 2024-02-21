import InputText from '@/components/form/InputText';
import React from 'react';

const CreateProduct = () => {
  return (
    <section className="flex flex-col ">
      <h1>Crear nuevo producto</h1>
      <InputText
        placeholder={'0000000000'}
        isFullWidth={true}
        label={'bar-code'}
        type={'number'}
      />
    </section>
  );
};

export default CreateProduct;
