import Image from "next/image"

export default async function Product({ searchParams }){


    return(
        <div className="flex justify-between gap-24 p-12 text-gray-700">
            <Image src={searchParams.images}
            alt={searchParams.name}
            width={600}
            height={600}
            />
        <div>
            <h1>Name</h1>
            <p>Description</p>
        </div>
    </div>
        )
}