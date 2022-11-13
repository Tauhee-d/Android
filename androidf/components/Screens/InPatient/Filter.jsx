import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from "@react-native-picker/picker";
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Filter = ({ navigation }) => {
    const handleOnDone = () => {
        navigation.navigate("Search For Patient")
    }
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container1}>
                <View style={styles.subcontainer}>
                    <View style={styles.gender}>
                        <Text>Gender</Text>
                    </View>
                    <View style={styles.gendertxt}>
                        <View style={styles.picker}>
                            <Picker style={styles.label}>
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                                <Picker.Item label="Other" value="Other" />
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={styles.subcontainer}>
                    <View style={styles.gender}>
                        <Text style={styles.txt}>Age</Text>
                        <Text style={styles.txt}>Diseases</Text>
                    </View>
                    <View style={styles.gendertxt}>

                        <TextInput style={styles.inputtxt} ></TextInput>
                        <TextInput style={styles.inputtxt} ></TextInput>

                        <View style={styles.btn}>
                            <TouchableOpacity onPress={handleOnDone} ><Text style={styles.txtbtn}>Done</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>

            </View>

        </View>
    )
}

export default Filter

const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        padding: 15,
        height: '100%',
        width: '100%'
    },
    subcontainer: {
        flexDirection: 'row',
        height: '50%',
        width: '100%',
    },
    gender: {
        width: "40%",
        padding: 15,
        height: '100%',
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
        // borderWidth: 1

    },
    gendertxt: {
        backgroundColor: 'white',
        width: "59%",
        marginLeft: 5,
        borderRadius: 5,
        // borderWidth: 1,
        // flex: 1
    },
    picker: {
        height: 200,
        // backgroundColor: 'white',
        // borderWidth: 1,
        borderRadius: 10,
        width: '100%'
    },
    label: {
        width: 200
    },
    inputtxt: {
        width: 200,
        margin: 5,
        marginLeft: 20


    },
    txt: {
        marginTop: 25
    },
    btn: {
        backgroundColor: 'blue',
        width: 80,
        borderRadius: 5,
        padding: 10,
        marginTop: '80%',
        marginLeft: '60%'
    },
    txtbtn: {
        color: 'white',
        textAlign: 'center'

    }
})