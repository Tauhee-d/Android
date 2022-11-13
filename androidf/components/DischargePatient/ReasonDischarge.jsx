import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from "expo-checkbox";

const ReasonDischarge = ({ navigation }) => {

    const Header = () => {
        return (
            <View style={style.header}>
                <Text style={style.headertxt}>Reason for Discharge</Text>
            </View>
        )
    }

    const CheckBox1 = () => {
        return (
            <View style={style.checkbox}>
                <View style={style.box}>
                    <CheckBox />
                    <Text style={style.boxtxt}>Discharge Sucessfully</Text>
                </View>
                <View style={style.box}>
                    <CheckBox />
                    <Text style={style.boxtxt}>DOPR</Text>
                </View>
                <View style={style.box}>
                    <CheckBox />
                    <Text style={style.boxtxt}>Abscond</Text>
                </View>
                <View style={style.box}>
                    <CheckBox />
                    <Text style={style.boxtxt}>Left against medical advice</Text>
                </View>
                <View style={style.box}>
                    <CheckBox />
                    <Text style={style.boxtxt}>Death</Text>
                </View>
            </View>
        )
    }

    const Reason = () => {
        return (
            <View style={style.textarea}>
                <TextInput
                    placeholder='Enter additional notes and observation'
                    multiline={true}
                    numberOfLines={8}
                />
            </View>
        )
    }

    const Button = () => {
        return (
            <View style={style.button}>
                <TouchableOpacity style={style.btn}
                    onPress={() => navigation.navigate('Sucessfull Discharge')}
                >
                    <Text style={style.btntext}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={style.maincontainer} >
            <View style={style.container}>
                <Header />
                <CheckBox1 />
                <Reason />
                <Button />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    maincontainer: {
        backgroundColor: '#ebedfa',
        height: '100%',
        width: '100%',
        justifyContent: 'center',

    },
    container: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 30,

    },
    header: {
        marginTop: '10%',
        marginBottom: '10%',
        backgroundColor: 'white',

    },
    headertxt: {
        fontSize: 30,
        textAlign: 'center',
    },
    checkbox: {
        marginLeft: '5%'
    },
    box: {
        margin: '5%',
        flexDirection: 'row'
    },
    boxtxt: {
        marginLeft: 10
    },
    textarea: {
        borderWidth: 1,
        margin: '5%'
    },
    button: {
        backgroundColor: '#324ae6',
        alignItems: 'center',
        width: '80%',
        marginLeft: '10%',
        padding: 4,
        marginBottom: '10%',
        borderRadius: 50
    },
    btntext: {
        fontSize: 25,
        color: 'white'
    },
})

export default ReasonDischarge