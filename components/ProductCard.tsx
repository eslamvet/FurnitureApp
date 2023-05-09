import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, FONTS, SIZES } from '@utils/theme'
import { PostCardProps } from '@Types/component.types'
import RowComponent from './RowComponent'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useAppDispatch } from 'store/hooks'
import { increment, toggleProductFavourite } from 'store/features/products/productSlice'

const ProductCard = ({customContainerStyle,product}:PostCardProps) => {
  const dispatch = useAppDispatch()
  
  return (
    <View style={[styles.container,customContainerStyle]}>
      <Image source={product.imageUrl} resizeMode='cover'style={{width:customContainerStyle ? 100 : '100%',height:customContainerStyle ? '100%' : 180,borderRadius:18}} />
      <View style={{flex:1}}>
        <Text style={styles.titleTextStyle}>{product.title}</Text>
        <Text style={styles.descriptionTextStyle} numberOfLines={2}>{product.description}</Text>
        <RowComponent customStyle={styles.customRowStyle}>
          <Text style={styles.priceTextStyle}>{product.price}</Text>
          <TouchableOpacity style={styles.iconContainerStyle} onPress={()=> !customContainerStyle && dispatch(increment())}>
            <Feather name={customContainerStyle ? 'arrow-right' : 'plus'} color={COLORS.white} size={18} />
          </TouchableOpacity>
        </RowComponent>
      </View>
      {!customContainerStyle && <TouchableOpacity style={[styles.iconContainerStyle,{backgroundColor:product.favourite ? COLORS.secondary : COLORS.transparent,position: 'absolute',top:SIZES.padding,end:SIZES.padding}]} onPress={()=>dispatch(toggleProductFavourite(product.id))}>
            <Ionicons name='md-heart' color={COLORS.white} size={18} />
      </TouchableOpacity>}
    </View>
  )
}

export default memo(ProductCard)

const styles = StyleSheet.create({
    container:{
        width:220,
        padding:SIZES.body3,
        gap:SIZES.radius,
        backgroundColor:COLORS.white,
        borderRadius:SIZES.padding,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 7,
        },
        shadowOpacity:  0.21,
        shadowRadius: 7.68,
        elevation: 10
    },
    titleTextStyle:{
        ...FONTS.h2,
        fontSize:20,
        color:COLORS.gray80
    },
    descriptionTextStyle:{
        fontSize:14,
        color:COLORS.gray50
    },
    customRowStyle:{
      marginTop:SIZES.radius,
      justifyContent:'space-between'
    },
    priceTextStyle:{
      ...FONTS.body2,
      fontSize:20,
      color:COLORS.gray80
    },
    iconContainerStyle:{
      width:30,
      height:30,
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLORS.primary
    },
    favIconContainerStyle:{
      width:30,
      height:30,
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:COLORS.secondary
    }
})