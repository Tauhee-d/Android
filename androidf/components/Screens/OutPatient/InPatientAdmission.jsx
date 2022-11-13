import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { Feather } from "@expo/vector-icons";



const InPatientAddmission = ({ navigation }) => {
    const onClickX = () => {
        navigation.navigate('PatientDetail')
    }
    const handleOnSubmit = () => {
        navigation.navigate('PatientAddedSucessfully')
    }
    return (
        <View style={styles.maincontainer}>
            <View style={styles.subcontainer}>
                <TouchableOpacity onPress={onClickX}>
                    <Feather style={styles.icon} name="x" size={25} />
                </TouchableOpacity>

                <Text style={styles.text}>Reasons for</Text>
                <Text style={styles.text}>InPatient Admission</Text>
                <TextInput style={styles.inputtxt} placeholder={"Please type reason"}></TextInput>
                <TextInput style={styles.inputtxt} placeholder={"type additional note"}></TextInput>
                <View style={styles.btn}>
                    <View style={styles.btn2}>
                        <TouchableOpacity onPress={handleOnSubmit}>
                            <Text style={styles.btntext}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InPatientAddmission

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