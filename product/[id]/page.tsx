import Image from "next/image"
import { SearchParamType } from "@/types/SearchParamType"
import formatPrice from "@/util/PriceFormat"

export default async function Product({ searchParams } : SearchParamType){

    return(
        <div className="flex justify-between gap-24 p-12 text-gray-700">
            <Image src={searchParams.image}
            alt={searchParams.name}
            width={600}
            height={600}
            className="w-full rounded-lg"
            />
        <div className="font-medium">
            <h1 className="tecxt-2xl py-2">{searchParams.name}</h1>
            <p className="py-2">{searchParams.description}</p>
            <p className="py-2">{searchParams.features}</p>
            <div className="flex gap-2">
                <p className="font-bold text-primary">
                    {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
                </p>
            </div>

            <button className="my-12 text-white py-2 px-6 font-medium rounded-md">Add to cart</button>
        </div>
    </div>
        )
}