import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'

const Discharge = ({ navigation }) => {
    const handleOnSubmit = () => {
        navigation.navigate('InPatientDischargeSuccessFull')
    }
    const data = [
        {
            label: 'Discharge Successfully'
        },
        {
            label: 'DOPR'
        },
        {
            label: 'Abscond'
        },
        {
            label: 'Left against medical advice'
        },
        {
            label: 'Death'
        },
    ]
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container1}>
                <Text>ICD Codes</Text>
                <TouchableOpacity style={styles.btn}><Text style={styles.btntxt}>Add Code</Text></TouchableOpacity>
            </View>
            <Text style={styles.emptytxt}></Text>
            <View style={styles.container2}>
                <RadioButtonRN
                    data={data}
                    selectedBtn={(e) => console.log(e)}
                    style={styles.radio}
                />
            </View>
            <View>
                <TouchableOpacity onPress={handleOnSubmit} style={styles.touch}>
                    <Text style={styles.touchtxt}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Discharge

const styles = StyleSheet.create({
    maincontainer: {
        height: '100%',
        width: '100%',
        padding: 15
    },
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: 'white',
        padding: 5,
        width: 100,
        borderRadius: 10
    },
    btntxt: {
        textAlign: 'center',
    },
    emptytxt: {
        borderWidth: 1,
        height: 0,
        marginTop: 10,
        marginBottom: 10
    },
    touch: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        marginTop: '85%'
    },
    touchtxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
})