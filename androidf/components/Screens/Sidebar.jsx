import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Sidebar = ({ ...props }) => {
    const handleLogout = () => {
        navigation.navigate('HomeScreen')
        console.log("logout");
    }
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.maincontainer} >
                <View style={styles.container}>

                    <Text style={styles.name}>Tauheed</Text>
                    <Text style={styles.mail}>Tauheed@gmail.com</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem label='Sign out' onPress={handleLogout} />

            </View>
        </DrawerContentScrollView>
    )
}

export default Sidebar

const styles = StyleSheet.create({
    maincontainer: {
        // backgroundColor: "#4a72f5"
    },
    container: {
        backgroundColor: "#4a72f5",
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 25,
        // marginLeft: 25,
        // backgroundColor: "#4a72f5"

    },
    mail: {
        // marginLeft: 15,
        // backgroundColor: "#4a72f5"

    }
})