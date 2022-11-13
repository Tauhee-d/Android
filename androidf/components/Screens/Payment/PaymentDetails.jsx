import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PaymentDetails = ({ navigation }) => {
    const handleOnPress = () => {
        navigation.navigate('PayBy')
    }
    return (
        <View style={styles.maincontainer}>
            <Text>PaymentDetails</Text>
            <TouchableOpacity onPress={handleOnPress} style={styles.btn}>
                <Text style={styles.btntxt}>Pay</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentDetails

const styles = StyleSheet.create({
    maincontainer: {
        height: '100%',
        width: '100%',
        padding: 15
    },
    btn: {
        backgroundColor: 'blue',
        width: 100,
        padding: 8,
        borderRadius: 10
    },
    btntxt: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
})