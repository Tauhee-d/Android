import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { useState } from 'react'


const AddPatient2 = ({ navigation }) => {
    const Phase1 = () => {

        const handleFormNext = () => {
            navigation.navigate('Medical Records')
        }



        return (
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.topbar}>
                        <View style={styles.topbartxt}>
                            <Text style={styles.topbartxtline}>Patient Details </Text>
                            <Text style={styles.topbartxtline}>Personal Details</Text>
                            <Text style={styles.topbartxtline}>Medical records</Text>
                        </View>
                        <View style={styles.topbarline}>
                            <Text style={styles.topbarline1}></Text>
                            <Text style={styles.topbarline2}></Text>
                            <Text style={styles.topbarline3}></Text>
                        </View>
                    </View>




                    <TextInput style={styles.textinput} placeholder='Gurdian Name' />


                    <TextInput style={styles.textinput} placeholder='Gurdian Email' />





                    <TextInput style={styles.textinput} placeholder=' Gurdian Phone No' />
                    <TextInput style={styles.textinput} placeholder='Address' />
                    <TextInput style={styles.textinput} placeholder='City' />
                    <TextInput style={styles.textinput} placeholder='State' />
                    <TextInput style={styles.textinput} placeholder='Country' />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.btncontainer} onPress={handleFormNext}>
                        <Text style={styles.btntxt}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.maincontainer}>
            <Phase1 />


        </View>
    )
}

export default AddPatient2

const styles = StyleSheet.create({
    maincontainer: {
        margin: 20,
    },
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    topbartxt: {
        flexDirection: 'row'
    },
    topbartxtline: {
        width: "33%",
        textAlign: 'center',

    },

    topbarline: {
        flexDirection: 'row',
        // borderWidth: 1,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 5

    },
    topbarline1: {
        backgroundColor: 'blue',
        width: '33%',
        // borderWidth: 1,
        borderRadius: 10
    },
    topbarline2: {
        backgroundColor: 'blue',
        width: '33%'
    },
    topbarline3: {
        backgroundColor: 'white',
        width: '34%',
        borderRadius: 10
    },
    subcontainer: {
        // alignItems: 'baseline'
        flex: 3
    },
    textinput: {
        backgroundColor: 'white',
        marginTop: 10,

    },

    button: {
        // alignItems: 'baseline',
        flex: 1,
    },
    btncontainer: {
        backgroundColor: 'blue',
        padding: 15,
        // height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30%',
        borderRadius: 10



    },
    modal: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
    },
    btncalender: {
        width: '19%',
        backgroundColor: 'white',
        padding: 15,
        // height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2,
        // borderRadius: 10



    },
    textinput1: {
        backgroundColor: 'white',
        width: '80%'

    },
    textinput2: {
        backgroundColor: 'white',
        width: '50%'

    },
    symbol: {
        marginLeft: 10,
        padding: 15,

        // justifyContent: 'center',
        // alignItems: 'center'
    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'baseline',
        fontSize: 20

    },
    Calender: {
        margin: 40,
        // marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10
    }
})