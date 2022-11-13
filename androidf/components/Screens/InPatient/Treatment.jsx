import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RadioButtonRN from 'radio-buttons-react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';


const Treatment = ({ navigation }) => {
    const data = [
        {
            label: '   Nil',
        },
        {
            label: '   Ringer Lactate'
        },
        {
            label: '   Normal Saline'
        },
        {
            label: '   Nil',
        },
        {
            label: '   Nil',
        },
        {
            label: '   Nil',
        },
        {
            label: '   Nil',
        },
        {
            label: '   Nil',
        },
    ];
    const Body = () => {
        return (
            <ScrollView style={styles.bodycontainer}>
                <Text style={styles.heading}>iV Fluids</Text>
                <View style={styles.container}>

                    <RadioButtonRN
                        data={data}
                        selectedBtn={(e) => console.log(e)}
                        style={styles.radio}
                    />

                </View>
                <Text style={styles.emptytxt}></Text>
                <Text style={styles.heading}>Antiepileptic drugs</Text>
                <View style={styles.container}>
                    <RadioButtonRN
                        data={data}
                        selectedBtn={(e) => console.log(e)}
                        style={styles.radio}
                    />
                </View>
                <Text style={styles.emptytxt}></Text>
                <Text style={styles.heading}>Injections</Text>
                <View style={styles.container}>
                    <RadioButtonRN
                        data={data}
                        selectedBtn={(e) => console.log(e)}
                        style={styles.radio}
                    />
                </View>

            </ScrollView>
        )
    }
    const Save = () => {
        return (
            <View style={styles.btncontainer}>
                <TouchableOpacity onPress={handleOnSave}><Text style={styles.btntxt} >save</Text></TouchableOpacity>

            </View>
        )
    }
    const handleOnSave = () => {
        navigation.navigate("TreatmentAdded")
    }

    return (
        <View style={styles.maincontainer}>
            <ScrollView>

                <Body />
            </ScrollView>
            <Save />
        </View>

    )
}

export default Treatment

const styles = StyleSheet.create({
    maincontainer: {
        padding: 15,
        height: '100%',
        width: '100%'
    },
    heading: {
        fontSize: 15
    },
    emptytxt: {
        width: '100%',
        borderWidth: 1,
        height: 0,
        marginTop: 15,
        marginBottom: 15
    },
    radio: {
        backgroundColor: 'none'
    },
    btncontainer: {
        backgroundColor: 'blue',
        width: 120,
        borderRadius: 10,
        marginLeft: '65%'
    },
    btntxt: {
        textAlign: 'center',
        padding: 7,
        color: 'white',
        fontSize: 20,
    }

})