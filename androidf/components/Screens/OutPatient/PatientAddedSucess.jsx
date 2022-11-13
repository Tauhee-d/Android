import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Feather } from "@expo/vector-icons";



const PatientAddedSucess = ({ navigation }) => {

    const handleOnOk = () => {
        navigation.navigate('Dashboard')
    }
    return (
        <View style={styles.maincontainer}>
            <View style={styles.subcontainer}>
                <Text style={styles.text}>Patient Added</Text>
                <Text style={styles.text}>successfully</Text>
                <View style={styles.btn}>
                    <View style={styles.btn2}>
                        <TouchableOpacity onPress={handleOnOk}>
                            <Text style={styles.btntext}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PatientAddedSucess

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
    inputtxt: {
        height: 40,
        width: 300,
        marginTop: 10,
        backgroundColor: '#f2f2f2'
    },
    icon: {

        margin: 10,
        marginLeft: '80%'
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