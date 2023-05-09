import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '@utils/theme'
import Header from './Header'
import SearchBar from './SearchBar'
import RecentProductList from './RecentProductList'
import BestSellingList from './BestSellingList'

const HomeScreen = () => {

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
      <Header />
      <SearchBar />
      <RecentProductList />
      <BestSellingList />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.bgColor
    },
    contentContainerStyle:{
        paddingTop:SIZES.largeTitle,
        paddingBottom:SIZES.padding
    }
})