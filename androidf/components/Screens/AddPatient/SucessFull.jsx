import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


import React from 'react'

const SucessFull = ({ navigation }) => {
    return (
        <View style={Styles.maincontainer}>
            <View style={Styles.subcontainer}>

                <Text style={Styles.text}>Sucess Adding Patient</Text>
                <Text style={Styles.text}>Goto Payments ?</Text>
                <View style={Styles.btn}>
                    <View style={Styles.btn1}>
                        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                            <Text style={Styles.btntext}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.btn2}>
                        <TouchableOpacity onPress={() => navigation.navigate("InPatientPayment")}>
                            <Text style={Styles.btntext}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SucessFull

const Styles = StyleSheet.create({
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
        width: '100%',
        marginTop: 20,
    },
    btn1: {
        borderRadius: 10,
        height: 40,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#324ae5",
    },
    btn2: {
        borderRadius: 10,
        height: 40,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#324ae5",
    },
    btntext: {
        color: "white",
        fontSize: 20,
    },
})