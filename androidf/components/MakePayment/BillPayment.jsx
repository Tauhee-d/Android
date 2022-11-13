import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import RadioButtonRN from 'radio-buttons-react-native';

// import { Input } from "@rneui/themed";
import { Ionicons, Fontisto, MaterialIcons } from '@expo/vector-icons';
// import {Picker} from"@react-native-picker/picker";
import { useState } from 'react';



const BillPayment = () => {




    const Header = () => {
        return (
            <View style={style.header}>
                <Text style={style.headertxt}>Bill Payment</Text>
            </View>
        )
    }
    const Pateint = () => {
        return (
            <View style={style.pateintcontainer}>
                <View style={style.pateintsubcontainer}>
                    <Ionicons name='person' size={85} />
                </View>
                <View style={style.pateint}>
                    <Text style={style.pateintheading}>
                        Adithya Mishra
                    </Text>
                    <Text style={style.pateinttxt}>Pateint Id: </Text>
                    <Text style={style.pateinttxt}>Phone:</Text>
                    <Text style={style.pateinttxt}>Email:</Text>

                </View>
            </View>
        )
    }

    const BillingItem = () => {
        return (
            <View style={style.billingItem}>
                <TouchableOpacity style={style.button}>
                    <Ionicons name='add' size={25} />
                    <Text style={style.btntxt}>Billing Item</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const Chargers = () => {
        return (
            <View style={style.chargers}>
                <View style={style.fee}>
                    <Text style={style.chargertxt}>OutPatient Fee</Text>
                    <TextInput style={style.input}></TextInput>
                    {/* <Input keyboardType='numeric' ></Input> */}
                </View>
                <View style={style.fee}>
                    <Text style={style.chargertxt}>Others</Text>
                    <TextInput style={style.input}></TextInput>
                    {/* <Input keyboardType='numeric' ></Input> */}
                </View>
            </View>
        )
    }

    const PaymentType = () => {
        const data = [
            {
                label: 'data 1'
            },
            {
                label: 'data 2'
            }
        ];

        return (
            <View style={style.payment}>
                <Text style={style.paymenttxt}>Paid By:</Text>
                <RadioButtonRN
                    data={data}
                    selectedBtn={(e) => console.log(e)}
                    icon={
                        <Icon
                            name="check-circle"
                            size={25}
                            color="#2c9dd1"
                        />
                    }
                />
            </View>
        )
    }

    const Pay = () => {
        return (
            <View style={style.pay}>
                <TouchableOpacity>
                    <Text style={style.paytxt} >Pay</Text>
                </TouchableOpacity>
            </View>
        )
    }




    return (
        <View style={style.maincontainer} >
            <View style={style.container}>
                <Header />
                <Pateint />
                <BillingItem />
                <Chargers />
                <PaymentType />
                <Pay />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    maincontainer: {
        backgroundColor: '#ebedfa',
        height: '100%',
        width: '100%',

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10

    },
    header: {
        marginTop: '10%',
        marginBottom: '10%'
    },
    headertxt: {
        fontSize: 30,
        textAlign: 'center',
    },
    pateintcontainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 5,
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5,
        elevation: 10

    },

    pateint: {

        marginBottom: 10,
        width: '70%'
    },
    pateintheading: {
        fontSize: 20,
        marginTop: 15
    },
    doctorcontainer: {
        backgroundColor: 'white',
        marginBottom: 10,

        padding: 5,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5,
        elevation: 10

    },
    billingItem: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: '#324ae6',
        padding: 5,
        width: 180,

    },
    btntxt: {
        fontSize: 25,
        color: 'white'
    },
    fee: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center',
        margin: 10
    },
    chargertxt: {
        fontSize: 15,
        width: '50%'
    },
    input: {
        backgroundColor: 'white',
        width: '20%',
        borderWidth: 1

    },
    payment: {
        marginRight: '70%'
    },
    paymenttxt: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
    },
    pay: {
        marginLeft: '60%',
        backgroundColor: '#324ae6',
        width: 100,
        padding: 10,
        borderRadius: 50,

    },
    paytxt: {
        textAlign: 'center',
        color: 'white'
    }


})

export default BillPayment
    ;



