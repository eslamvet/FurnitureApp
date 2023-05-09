import { PropsWithChildren } from "react"
import { FlatListProps, ImageSourcePropType, ListRenderItem, StyleProp, TextStyle, ViewStyle } from "react-native/types"
import { ProductState } from "./state.types"

export type RowComponentProps = PropsWithChildren<{
    customStyle ?: StyleProp<ViewStyle>
}>

export type ListProps = {
    customContentContainerStyle?:StyleProp<ViewStyle>
    title:string
} & Omit<FlatListProps<ProductState>,'contentContainerStyle'|'keyExtractor'|'ListEmptyComponent'|'ItemSeparatorComponent'>

export type PostCardProps = {
    product : ProductState
    customContainerStyle ?: StyleProp<ViewStyle>
}
