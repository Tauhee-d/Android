import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Apitest = () => {
  return (
    <View style={styles.maincontainer}>
      <Text>Apitest</Text>
    </View>
  )
}

export default Apitest

const styles = StyleSheet.create({
    maincontainer:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})