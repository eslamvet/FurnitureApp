import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { memo, useState, useDeferredValue, useEffect } from 'react'
import RowComponent from '@components/RowComponent'
import { COLORS, FONTS, SIZES } from '@utils/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { filterProducts } from 'store/features/products/productSlice'

const SearchBar = () => {
  const count = useAppSelector(state=>state.products.count) as number
  const [searchText, setSearchText] = useState('')
  const searchTextDefferedValue = useDeferredValue(searchText)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(filterProducts(searchTextDefferedValue))
  }, [searchTextDefferedValue])
  
    
  return (
    <RowComponent customStyle={styles.customRowStyle}>
        <RowComponent customStyle={styles.textInputContainerStyle}>
            <TouchableOpacity style={styles.searchIconContainerStyle}>
                <Ionicons name="search" size={20} color={COLORS.black} />
            </TouchableOpacity>
            <TextInput style={styles.textInputStyle} value={searchText} onChangeText={setSearchText} />
        </RowComponent>
        <TouchableOpacity style={styles.cartIconContainerStyle}>
                <Feather name="shopping-cart" size={24} color={COLORS.black} />
                {count > 0 && <View style={styles.cartCountContainerStyle}>
                    <Text style={styles.cartCountTextStyle}>{count}</Text>
                </View>}
        </TouchableOpacity>
    </RowComponent>
  )
}

export default memo(SearchBar)

const styles = StyleSheet.create({
    customRowStyle:{
        paddingHorizontal:SIZES.padding,
        marginVertical:SIZES.largeTitle,
        gap:SIZES.padding,
    },
    textInputContainerStyle:{
        flex:1,
        gap:SIZES.base,
        backgroundColor:COLORS.white,
        paddingHorizontal:SIZES.radius,
        borderRadius:SIZES.base,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 7,
        },
        shadowOpacity:  0.21,
        shadowRadius: 7.68,
        elevation: 10
    },
    textInputStyle:{
        flex:1,
        color:COLORS.gray85,
        ...FONTS.body3,
    },
    searchIconContainerStyle:{
        padding:3
    },
    cartIconContainerStyle:{
        position:'relative',
        padding:5
    },
    cartCountContainerStyle:{
        position:'absolute',
        width:15,
        height:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:SIZES.font,
        backgroundColor:COLORS.secondary,
        top:0,
        end:0
    },
    cartCountTextStyle:{
        fontSize:10,
        color:COLORS.white
    }
})