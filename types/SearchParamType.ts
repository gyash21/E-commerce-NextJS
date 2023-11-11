import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

type params = {

    id: string
}

type SearchParams = {

    name: string
    price: number | null
    image: string
    id: string
}



export type SearchParamType = {
   
    params: Params
    searchParams: SearchParams
}