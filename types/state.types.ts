import { ImageSourcePropType } from "react-native"

export type ProductState = {
    id: number
    title: string
    description: string
    price:string
    favourite?:boolean
    imageUrl:ImageSourcePropType
}
