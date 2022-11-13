import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";


const PatientDetail = ({ navigation }) => {
    const handleOnMakeInPatient = () => {
        navigation.navigate('InPatientAdmission')
    }
    const handleOnAddSysmptom = () => {
        navigation.navigate('Symptoms')
    }
    const handleOnAddTreatment = () => {
        navigation.navigate('Treatments')
    }
    return (
        <View style={styles.maincontainer}>
            <TouchableOpacity>
                <View style={styles.body}>
                    <View style={styles.iconconatiner}>
                        <Ionicons name="person" size={45} />
                    </View>
                    <View style={styles.txtcontainer}>
                        <Text style={styles.heading}>XYZ </Text>
                        <Text style={styles.txt}>patientID:</Text>
                        <Text style={styles.txt}>UHID:</Text>
                        <Text style={styles.txt}>Dr.ID</Text>
                    </View>

                </View>
                <View style={styles.dischargecontainer}>
                    <Text style={styles.dischargetxt}>Discharge Reason:</Text>
                    <Text style={styles.txtreason}>DOPR</Text>
                </View>
                <View style={styles.container1}>
                    <Text>ICD Codes</Text>
                    <Text style={styles.btntxt1}>Add Code</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.symptomscontainer}>
                <View style={styles.subcontainer}>

                    <Text>Symptoms:</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.containertxt}>Arm Pain</Text>
                    <Text style={styles.containertxt}>Arm Pain</Text>
                    <Text style={styles.containertxt}>Arm Pain</Text>
                </View>
                <Text style={styles.plaintxt}></Text>
            </View>
            <View style={styles.traetmentcontainer}>
                <View style={styles.subcontainer}>

                    <Text>Treatment:</Text>
                </View>

            </View>

        </View >
    )
}

export default PatientDetail

const styles = StyleSheet.create({
    maincontainer: {
        margin: 15
    },
    dischargecontainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    txtreason: {
        backgroundColor: '#b3ffb3',
        width: 80,
        textAlign: 'center',
        borderRadius: 10
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        // backgroundColor: 'white',
        padding: 5,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    btntxt1: {
        textAlign: 'center',
        borderRadius: 10,
        marginLeft: 10
    },

    body: {
        flexDirection: "row",
        backgroundColor: "white",
        margin: 4,
        padding: 4,
    },
    iconconatiner: {
        justifyContent: "center",
        marginLeft: 20,
    },
    heading: {
        fontSize: 20,
    },
    txtcontainer: {
        marginLeft: 20,
    },
    containertxt: {
        backgroundColor: 'white',
        width: 100,
        borderRadius: 5,
        padding: 5,
        marginLeft: 15,
        marginTop: 10
    },
    container: {
        flexDirection: 'row'
    },
    subcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    subcontainertxt: {
        backgroundColor: 'white',
        width: 40,
        height: 25,
        textAlign: 'center',
        fontSize: 25,
        borderWidth: 1
    },
    traetmentcontainer: {
        // height: '10%'
    },
    plaintxt: {
        borderWidth: 1,
        height: 1,
        marginTop: 20
    },
    plaintreatmenttxt: {
        borderWidth: 1,
        height: 1,
        marginTop: 20,
        flexDirection: 'column'
    },
    buttonMakeIn: {

        alignItems: 'center',
        marginTop: '90%'

    },
    buttonDischarge: {

        alignItems: 'center',
        marginTop: 10

    },

    Discharge: {
        backgroundColor: 'blue',
        width: '90%',
        padding: 10,
        borderRadius: 15
    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }

})