import Link from "next/link"
import { IoMdAddCircleOutline } from "react-icons/io"


const CarouselProduct = () => {
    return (
        <div className="flex flex-col w-46 rounded-lg shadow-lg p-2">
            <h3 className="text-lg font-bold text-product">Medicamentos</h3>
            <p className="text-product text-sm">S/ 2.5</p>
            <div className="flex gap-2 justify-between items-center">
                <p className="text-product text-xs">Farmaindrustia</p>
                <p className="text-product text-xs">250 mg</p>
            </div>
            <p className="text-product text-sm">15 unidades den stock</p>
            <div className="flex gap-2 justify-between items-center">
                <Link className="text-white text-xs bg-orange p-1 rounded-md" href={'/'}>Ver detalles</Link>
                <IoMdAddCircleOutline style={{fontSize: '2rem'}}/>
            </div>
        </div>
    )
}

export default CarouselProduct