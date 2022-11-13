import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput } from 'react-native-paper';
import { FlatList, ScrollView, TouchableOpacity, } from 'react-native-gesture-handler';


const Symptoms = ({ navigation }) => {
    const SymptomName = [
        {
            symptom: 'Abdominal Pain'
        },
        {
            symptom: 'Arm Pain'
        },
        {
            symptom: 'Back Pain'
        },
        {
            symptom: 'Body Pain'
        },
        {
            symptom: 'Breast Pain'
        },
        {
            symptom: 'Abdominal Pain'
        },
        {
            symptom: 'Arm Pain'
        },
        {
            symptom: 'Back Pain'
        },
        {
            symptom: 'Body Pain'
        },
        {
            symptom: 'Breast Pain'
        },
        {
            symptom: 'Abdominal Pain'
        },
        {
            symptom: 'Arm Pain'
        },
        {
            symptom: 'Back Pain'
        },
        {
            symptom: 'Body Pain'
        },
        {
            symptom: 'Breast Pain'
        },
        {
            symptom: 'Abdominal Pain'
        },
        {
            symptom: 'Arm Pain'
        },
        {
            symptom: 'Back Pain'
        },
        {
            symptom: 'Body Pain'
        },
        {
            symptom: 'Breast Pain'
        },
        {
            symptom: 'Abdominal Pain'
        },
        {
            symptom: 'Arm Pain'
        },
        {
            symptom: 'Back Pain'
        },
        {
            symptom: 'Body Pain'
        },
        {
            symptom: 'Breast Pain'
        },

    ]
    const handleOnSave = () => {
        navigation.navigate("OutPatientDetails")
    }
    const Search = () => {
        return (
            <View style={styles.search}>
                <Text style={styles.iconcontainer}>
                    <Ionicons style={styles.icon} name="search" size={25} />
                </Text>
                <TextInput style={styles.searchtxt} placeholder='Type Something'></TextInput>
            </View>
        )
    }
    const Scrollsymptom = () => {
        return (
            <ScrollView style={styles.Symptoms} >
                <FlatList
                    data={SymptomName}
                    renderItem={(e) => {

                        return <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btntxt}>{e.item.symptom}</Text>
                        </TouchableOpacity>

                    }} />
            </ScrollView>
        )
    }
    const Savebtn = () => {
        return (
            <View style={styles.save}>
                <TouchableOpacity onPress={handleOnSave}><Text style={styles.savetxt}>save</Text></TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.maincontainer}>
            <View style={styles.body}>

                <Search />
                <Scrollsymptom />
            </View>
            <View style={styles.subbody}>

                <Savebtn />
            </View>

        </View>
    )
}

export default Symptoms

const styles = StyleSheet.create({
    maincontainer: {
        margin: 15,
        width: '100%',
        height: '100%',

    },
    body: {
        flex: 10
    },
    subbody: {
        flex: 1
    },

    search: {
        flexDirection: 'row'
    },
    icon: {
        justifyContent: 'center',
    },
    searchtxt: {
        marginLeft: 4,
        width: '80%',
        height: 45,
        borderBottomEndRadius: 15,
        borderTopEndRadius: 15,
        backgroundColor: 'white'
    },
    iconcontainer: {
        backgroundColor: 'white',
        height: 50,
        width: 50,
        borderRadius: 10,
        padding: 10,
        borderTopLeftRadius: 75,
        borderTopRightRadius: 15
    },
    btntxt: {
        marginTop: 10,
        backgroundColor: 'white',
        padding: 15,
        // width: '100%'
        width: '92%',

        // marginLeft: 10
    },
    save: {
        backgroundColor: 'blue',
        height: 40,
        width: 80,
        borderRadius: 10,
        // marginTop: '140%',
        marginLeft: '60%',
        position: 'absolute',

    },
    savetxt: {
        textAlign: 'center',
        color: 'white',
        padding: 7,
        fontSize: 20
    }
})