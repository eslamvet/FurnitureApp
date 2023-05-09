import React, { useCallback } from 'react'
import List from '@components/List'
import ProductCard from '@components/ProductCard'
import { ProductState } from '@Types/state.types'
import { useAppSelector } from 'store/hooks'
import { SIZES } from '@utils/theme'

const RecentProductList = () => {
      
      const recentProducts = useAppSelector(state=>state.products.recent) as ProductState[]

      const renderItem = useCallback(({item:product}:{item:ProductState})=> <ProductCard product={product} /> ,[])

      const getItemLayoutHandler = useCallback((data:any,index:number)=>({
            length:220,
            offset:220 * index + SIZES.padding,
            index
        }),[])

      return <List data={recentProducts} title='EXPLORE' horizontal renderItem={renderItem} getItemLayout={getItemLayoutHandler} />
}

export default RecentProductList
