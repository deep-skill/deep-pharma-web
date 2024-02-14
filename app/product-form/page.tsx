import ProductForm from "@/components/form/ProductForm";


export default function ProductFormPage() {
    return (
      <section className="w-full h-full  p-4 bg-blue-gray-300">
        <h2 className="text-3xl  text-orange-800">Agregar producto</h2>
        <ProductForm/>
      </section>
    );
  }