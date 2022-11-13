import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Picker } from "@react-native-picker/picker";


const AddPatient3 = ({ navigation }) => {
    const handleFormNext = () => {
        navigation.navigate('Add Pateint SucessFull')
    }
    return (
        <View style={styles.maincontainer}>
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


            <View style={styles.container}>
                <View style={styles.picker}>
                    <Text style={styles.txt}>Doctor :</Text>
                    <Picker >
                        <Picker.Item label="Dr.Zab" value="Dr.Zab" />
                        <Picker.Item label="Dr.Mac" value="Dr.Mac" />
                    </Picker>
                </View>
                <View style={styles.picker}>
                    <Text style={styles.txt}>Department :</Text>
                    <Picker >
                        <Picker.Item label="Surgery" value="Surgery" />
                        <Picker.Item label="Neurology" value="Neurology" />
                    </Picker>
                </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.btncontainer} onPress={handleFormNext}>
                    <Text style={styles.btntxt}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddPatient3

const styles = StyleSheet.create({
    maincontainer: {
        margin: 20,
        height: '100%',
        // width: '100%'
    },
    container: {
        margin: 20,
        flex: 3
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
        backgroundColor: 'blue',
        width: '34%',
        borderRadius: 10
    },
    picker: {
        height: 200,
        // backgroundColor: 'white',
        // borderWidth: 1,
        borderRadius: 10
    },
    txt: {
        fontSize: 20
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
        marginTop: '20%',
        borderRadius: 10



    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'baseline',
        fontSize: 20

    },
})