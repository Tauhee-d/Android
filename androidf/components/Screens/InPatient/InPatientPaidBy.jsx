import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



const InPatientPaidBy = ({ navigation }) => {
    const handleOnPay = () => {
        navigation.navigate('InPatientPaySuccessfull')
    }
    const data = [
        {
            label: '   Cash',
        },
        {
            label: '   Card'
        },
        {
            label: '   UPI'
        }
    ];

    return (
        <View style={styles.maincontainer}>
            <View style={styles.subcontainer}>

                <Text style={styles.text}>Paid By</Text>
                <Text style={styles.textline}></Text>
                <RadioButtonRN
                    data={data}
                    selectedBtn={(e) => console.log(e)}
                    style={styles.radio}
                />
                <Text></Text>

                <View style={styles.btn}>
                    <View style={styles.btn2}>
                        <TouchableOpacity onPress={handleOnPay}>
                            <Text style={styles.btntext}>Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InPatientPaidBy

const styles = StyleSheet.create({
    maincontainer: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#ebedfa",
        justifyContent: "center",
    },
    radio: {
        width: 150,

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
    textline: {
        width: '80%',
        borderWidth: 1,
        height: 1
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