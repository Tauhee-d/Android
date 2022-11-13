import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import Toast from 'react-native-toast-message'
import axios from 'axios'


const Signup = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const clearTextInputs = () => {
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const handleFormSubmit = () => {
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                // const formData = { name, email, password, confirmPassword }
                clearTextInputs()
                Toast.show({
                    type: "done",
                    position: 'top',
                    topOffset: 0,
                    text1: "Registartion Sucessfull"
                })
                postUserDetail()
                navigation.navigate('HomeScreen')
            } else {
                console.log("password and confirm password doesn't match");
                Toast.show({
                    type: "warning",
                    position: 'top',
                    topOffset: 0,
                    text1: "password and confirm password doesn't match"
                })
            }

        } else {
            console.log("All fields are required");
            Toast.show({
                type: "warning",
                position: 'top',
                topOffset: 0,
                text1: "All fields are required!"
            })
        }


    }

    const postUserDetail = () => {
        axios.post(
            "http://localhost:3000/user/signup",
            {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }
        )

    }

    const toastConfig = {
        warning: ({ text1, text2 }) => (
            <View style={{ height: 30, width: "100%", backgroundColor: "orange", padding: 4 }}>
                <Text>{text1}</Text>
                <Text>{text2}</Text>
            </View>
        ),
        done: ({ text1, text2 }) => (
            <View style={{ height: 30, width: "100%", backgroundColor: "green", padding: 4 }}>
                <Text>{text1}</Text>
                <Text>{text2}</Text>
            </View>
        )
    }
    return (
        <>
            <View style={style.maincontainer}>
                <Toast config={toastConfig} />
                <Text style={style.mainheading}>
                    Sign up
                </Text>
                <View style={style.inputcontainer}>
                    <Text style={style.labels}>
                        Enter your name
                    </Text>
                    <TextInput mode={'outlined'} style={style.inputstyle}
                        value={name}
                        onChangeText={setName}

                    />
                </View>
                <View style={style.inputcontainer}>
                    <Text style={style.labels}>
                        Enter your email
                    </Text>
                    <TextInput mode={'outlined'} style={style.inputstyle}
                        value={email}
                        onChangeText={setEmail}

                    />
                </View>
                <View style={style.inputcontainer}>
                    <Text style={style.labels}>
                        Enter your password
                    </Text>
                    <TextInput mode={'outlined'} style={style.inputstyle}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}

                    />
                </View>
                <View style={style.inputcontainer}>
                    <Text style={style.labels}>
                        Enter your confirm password
                    </Text>
                    <TextInput mode={'outlined'} style={style.inputstyle}
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}

                    />
                </View>

                <TouchableOpacity style={style.button} onPress={(handleFormSubmit)} >
                    <Text style={style.buttontext}>Next</Text>
                </TouchableOpacity>

            </View>

        </>
    );
}
const style = StyleSheet.create({
    maincontainer: {
        height: "100%",
        paddingTop: 30,
        paddingHorizontal: 30,


    },
    mainheading: {
        fontSize: 40,
        paddingTop: 40,
        paddingBottom: 20,
        textAlign: 'center',
        marginTop: 30


    },
    inputcontainer: {

    },
    labels: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 5,
        lineHeight: 25,

    },
    inputstyle: {
        borderColor: 'black',
        // borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 3,
        height: 50

    },
    checkbox: {
        marginTop: 10,
    },
    button: {
        fontSize: 40,
        marginTop: 50
    },
    buttontext: {
        fontSize: 20,
        borderWidth: 1,
        textAlign: 'center',
        color: "white",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 15



    }
})

export default Signup;
