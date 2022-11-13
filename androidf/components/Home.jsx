import React from 'react'
import bg from './Images/home.webp'
import {View,TouchableOpacity,StyleSheet,Text,TextInput, ImageBackground} from 'react-native'
// import { createDrawerNavigator } from 'react-navigation-drawer';
// const Drawer = createDrawerNavigator()

function Home({navigation}) {
  return (
    <>
   <View style={style.maincontainer} >
        <ImageBackground source={bg} style={style.bg}>
            {/* <View style={style.container}> */}
            <View style={style.buttoncontainer}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('SigninScreen')}>
                <Text style={style.buttonlogin}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={()=> navigation.navigate('SignupScreen')} >
                <Text style={style.buttonregister}>REGISTER</Text>
            </TouchableOpacity>
            </View>
            {/* </View> */}

        </ImageBackground>
       
    </View>
    </>
  )
}
const style = StyleSheet.create({
        maincontainer:{
        height:"100%",
        width:'100%',

    },
    bg:{
        flexDirection:"row",
        height:"100%",
        width:"100%",
    },
    buttoncontainer:{
            flex:1,
            width:'100%',
            flexDirection:'row',
            alignItems:'flex-end',
            padding:5,
            
            
        },
        button:{
            
            // backgroundColor:'white',
            flex:1,
            alignItems:'stretch',
            padding:15,
     
        
    },
    buttonlogin:{
        borderWidth:1,
        padding:8,
        fontSize:20,
        justifyContent:'space-between',
        textAlign:'center',
        backgroundColor:'black',
        borderRadius:50,
        color:'white',


      
    },
    buttonregister:{
        borderWidth:1,
        padding:8,
        fontSize:20,
        marginLeft:8,
        justifyContent:'space-between',
        textAlign:'center',
        borderRadius:50,
        color:'white',
        backgroundColor:'black'
    }

 
 
})

export default Home