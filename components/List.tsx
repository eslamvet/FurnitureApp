import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { COLORS, FONTS, SIZES } from '@utils/theme'
import { ListProps } from '@Types/component.types'
import { ProductState } from '@Types/state.types'

        
const List = ({customContentContainerStyle,title,...props}:ListProps) => {

  const ItemSeparatorComponent = ()=><View style={props.horizontal ? {width:SIZES.padding} : {height:SIZES.padding}} />

  const keyExtractorHandler = (item:ProductState,index:number) => item.id.toString()

  return (
    <>
      <Text style={styles.headerTitleStyle}>{title}</Text>
      <FlatList
          contentContainerStyle={[styles.contentContainerStyle,customContentContainerStyle]}
          keyExtractor={keyExtractorHandler}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={<Text style={styles.emptyTextStyle}>There are no products</Text>}
          {...props}
      />      
    </>
  )
}

export default memo(List)

const styles = StyleSheet.create({
  headerTitleStyle:{
    ...FONTS.h2,
    paddingHorizontal:SIZES.padding,
    color:COLORS.black
  },
  contentContainerStyle:{
    padding:SIZES.padding
  },
  emptyTextStyle:{
    ...FONTS.body3,
    color:COLORS.black
  }
})