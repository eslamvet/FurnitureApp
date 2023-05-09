import { StyleSheet, ScrollView, View } from 'react-native'
import React, { useCallback } from 'react'
import { ProductState } from '@Types/state.types'
import List from '@components/List'
import ProductCard from '@components/ProductCard'
import { SIZES } from '@utils/theme'
import { useAppSelector } from 'store/hooks'

const BestSellingList = () => {
    const bestSellingProducts = useAppSelector(state=>state.products.bestSelling) as ProductState[]

    const renderItem = useCallback(({item:product}:{item:ProductState})=> <ProductCard product={product} customContainerStyle={styles.customContainerStyle} /> ,[])

    const getItemLayoutHandler = useCallback((data:any,index:number)=>({
        length:140,
        offset:140 * index + SIZES.padding,
        index
    }),[])

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEnabled={false} contentContainerStyle={{flex:1}}>
            <View style={{flex:1}}>
                <List data={bestSellingProducts} title='Best Selling' renderItem={renderItem} scrollEnabled={false} getItemLayout={getItemLayoutHandler} />
            </View>
        </ScrollView>
    )
}

export default BestSellingList

const styles = StyleSheet.create({
    customContainerStyle:{
        flexDirection:'row',
        width:'100%',
        gap:SIZES.font
    }
})