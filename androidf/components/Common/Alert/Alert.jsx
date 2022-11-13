import { View, Text } from 'react-native'
import React from 'react'
import Toast from "react-native-toast-message";

const Alert = () => {
    const toastConfig = {
        warning: ({ text1, text2 }) => (
            <View
                style={{
                    height: 30,
                    width: "100%",
                    backgroundColor: "orange",
                    padding: 4,
                }}
            >
                <Text>{text1}</Text>
                <Text>{text2}</Text>
            </View>
        ),
        done: ({ text1, text2 }) => (
            <View
                style={{
                    height: 30,
                    width: "100%",
                    backgroundColor: "green",
                    padding: 4,
                }}
            >
                <Text>{text1}</Text>
                <Text>{text2}</Text>
            </View>
        ),
    };
    return (
        <Toast config={toastConfig} />

    )
}

export default Alert