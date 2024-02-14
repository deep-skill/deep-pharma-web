'use client'

import { Input } from "@material-tailwind/react";

const ProductForm = () => {
        return (
            <form>
                <div className="w-72">
                    <Input label="Username" crossOrigin={undefined} />
                </div>
            </form>
        );
    };
    
    export default ProductForm;