import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";


const PaymentFinished = ({ navigation }) => {
    const handleOnOK = () => {
        navigation.navigate('Dashboard')
    }
    return (
        <View style={styles.maincontainer}>
            <View style={styles.subcontainer}>
                <AntDesign style={styles.icon} name="checkcircle" size={70} />
                <Text style={styles.text}>Payment Finished</Text>
                <View style={styles.btn}>
                    <View style={styles.btn2}>
                        <TouchableOpacity onPress={handleOnOK}>
                            <Text style={styles.btntext}>ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PaymentFinished

const styles = StyleSheet.create({
    maincontainer: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#ebedfa",
        justifyContent: "center",
    },
    subcontainer: {
        backgroundColor: "white",
        height: "43%",
        width: "90%",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 8,
    },
    text: {
        fontSize: 25,
        margin: 10,
    },
    icon: {
        color: "#00b359",
        margin: 10,
    },
    btn: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 250,
        marginTop: 20,
    },

    btn2: {
        borderRadius: 10,
        height: 40,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#324ae5",
        width: 100
    },
    btntext: {
        color: "white",
        fontSize: 20,
    },
})