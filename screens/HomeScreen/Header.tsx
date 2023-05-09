import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useRef } from 'react'
import RowComponent from '@components/RowComponent'
import { COLORS, SIZES } from '@utils/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Header = () => {
  const lines = useRef(Array.from({length:3}))

  return (
    <RowComponent customStyle={styles.customRowStyle}>
        <TouchableOpacity style={styles.drawerIconContainerStyle}>
            {
                lines.current.map((_,index) => <View key={index} style={[styles.lineStyle,{width:index == 1 ? '100%' : '50%'},index == 2 && {alignSelf:'flex-end'}]} />)
            }
        </TouchableOpacity>
        <TouchableOpacity style={styles.personIconContainerStyle}>
            <Ionicons name="ios-person" size={20} color={COLORS.white} />
        </TouchableOpacity>
    </RowComponent>
  )
}

export default memo(Header)

const styles = StyleSheet.create({
    drawerIconContainerStyle:{
        width:36,
        height:28,
        padding:5,
        justifyContent:'space-between'
    },
    lineStyle:{
        height:2,
        backgroundColor:COLORS.black
    },
    customRowStyle:{
        paddingHorizontal:SIZES.padding,
        justifyContent:'space-between'
    },
    personIconContainerStyle:{
        borderRadius:SIZES.base,
        padding:SIZES.base,
        backgroundColor:COLORS.primary
    }
})