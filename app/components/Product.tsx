import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import { ProducType } from "@/types/ProductType"

export default function Product({name, image, price}: {name:string, image:string, price: number | null}){

    return(
        <div className="text-gray-700">
        
            <Image src={image} alt={name} width={800} height={800} className="w-96 h-89 object-cover"/>
            <h1>{name}</h1>
            {formatPrice(price)}

        </div>
    )
}