import Link from "next/link"
import { IoMdAddCircleOutline } from "react-icons/io"


const CarouselProduct = () => {
    return (
        <div className="flex flex-col rounded-lg shadow-lg p-4">
            <h3 className="text-3xl font-bold text-product">Medicamentos</h3>
            <p className="text-product">S/ 2.5</p>
            <div className="flex gap-2 justify-between items-center">
                <p className="text-product">Farmaindrustia</p>
                <p className="text-product">250 mg</p>
            </div>
            <p className="text-product">15 unidades den stock</p>
            <div className="flex gap-2 justify-between items-center">
                <Link className="text-white bg-orange p-2 rounded-lg" href={'/'}>Ver detalles</Link>
                <IoMdAddCircleOutline style={{fontSize: '2rem'}}/>
            </div>
        </div>
    )
}

export default CarouselProduct