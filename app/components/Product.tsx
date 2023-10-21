import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import { ProducType } from "@/types/ProductType"
import Link from "next/link"

export default function Product({name, image, price, id}: {name:string, image:string, price: number | null, id:string}){

    return(
        <Link href={{pathname: '/product/${id}'}, query:{name,image,price,id}>
        <div className="text-gray-700">
        
            <Image src={image} alt={name} width={800} height={800} className="w-96 h-89 object-cover rounded-lg"/>

            <div className="font-medium py-2">

            <h1>{name}</h1>
            <h2 className="text-sm text-teal-700">{formatPrice(price)}</h2>

            </div>
        </div>
        </Link>
    )
}