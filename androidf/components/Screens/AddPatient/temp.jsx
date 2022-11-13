// import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity } from 'react-native'
// import React from 'react'
// import { MaterialCommunityIcons,Ionicons,FontAwesome} from '@expo/vector-icons'



// const Phase1 = ()=>{
//     return(
//         <View style={styles.container}>
//         <View style={styles.subcontainer1}>
//         <TextInput style={styles.subcontainer1txt} placeholder='Patient Id'/>
//         <TextInput style={styles.subcontainer1txt} placeholder='Unique Health Id'/>
//         <TextInput style={styles.subcontainer1txt} placeholder='First Name'/>
//         <TextInput style={styles.subcontainer1txt} placeholder='Last Name'/>
//         <TextInput style={styles.subcontainer1txt} placeholder='Email'/>
//         <TextInput style={styles.subcontainer1txt} placeholder='Phone Number'/>
//         <TextInput style={styles.subcontainer1txt} placeholder='Guardian Name'/>
//         <TextInput style={styles.subcontainer1txt} placeholder='Guardian Email'/>
//         <TextInput style={styles.subcontainer1txt} placeholder='Guardian Phone no'/>
   
//       </View>
//         <View style={styles.subcontainer2}>
//         <MaterialCommunityIcons style={styles.icon} name='human-male' size={70}/>
//         <TextInput style={styles.subcontainer1txt} placeholder='Age'/>
//         <TextInput style={styles.subcontainer1txt} placeholder='Weight'/>
//         <Text>Gender:</Text>
//       </View>
//       </View>
//     );
// }

// const Submit = () => {

//     const onSubmit = () =>{
//         navigation.navigate('Sucessfull')
//     }

//     return (
//       <View style={styles.submit}>
//         <TouchableOpacity style={styles.button} onPress={onSubmit}>
//           <Text style={styles.btntxt}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }


// const Temp = (navigation) => {

   

//   return (
//     <ScrollView style = {styles.maincontainer}>
//         <Phase1/>
//         <Submit/>

//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
//       <Text>temp</Text>
     
//     </ScrollView>
//   )
// }

// export default Temp

// const styles = StyleSheet.create({
//     maincontainer:{
      
//         backgroundColor: "#ebedfa",
//         padding:5
//     },
 
//     container:{
//         flexDirection:'row'
//     },
//     subcontainer1txt:{
//         fontSize:15,
//         backgroundColor:'white',
//         // height:'50%',
//         padding:10,
//         // width:'100%',
//         borderRadius:20,
//         borderWidth:2,
//         borderColor:'#d9d9d9',
//         alignItems:'center',
//         textAlign:'center',
//         marginTop:10
        
//       },
//       submit:{
//         borderRadius:20,
//         padding:10,
//         width:'100%',
//         justifyContent:'center',
//         alignItems:'center',
//         marginTop:20
      
//       },
//       btntxt:{
//         backgroundColor:'#324ae5',
//         color:'white',
//         width:200,
//         textAlign:'center',
//         padding:10,
//         fontSize:20,
//         borderRadius:30



//       }
// })





import {View,StyleSheet,TouchableOpacity,Text,TextInput,ScrollView,SafeAreaView} from 'react-native'
import { MaterialCommunityIcons,Ionicons,FontAwesome} from '@expo/vector-icons'
// import { SelectListProps } from 'react-native-dropdown-select-list'
const PatientDetails = ({navigation}) => {


  const SubContainer1 = () =>{

        // const [selected, setSelected] = React.useState('')
        // const data = [
        //   {key:1, value:'John'},
        //   {key:2, value:'Chris Hemsworth'},
        //   {key:3, value:'Karan johar'},
        //   {key:4, value:'Chole'},
        // ];

    return(
      <View>

      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.subcontainer1txt} placeholder='Patient Id'/>
        <MaterialCommunityIcons style={Styles.icon} name='human-male' size={70}/>

      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c2txt1} placeholder='Unique Health Id'/>
        <TextInput style={Styles.c2txt2} placeholder='Age'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c2txt1} placeholder='First Name'/>
        <TextInput style={Styles.c2txt2} placeholder='Weight'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.lastname} placeholder='Last Name'/>
        <View style={Styles.genderContainer}>
          <Text style={Styles.genderheading}>Gender:</Text>
          <View style={Styles.gender}>

          <TouchableOpacity >
            <Ionicons name='male' size={20}/>
          </TouchableOpacity>
          <TouchableOpacity >
            <Ionicons name='female' size={20}/>
          </TouchableOpacity>
          <TouchableOpacity >
            <FontAwesome name='transgender-alt' size={20}/>
          </TouchableOpacity>
          </View>
        </View>
        {/* <TextInput style={Styles.c2txt2} placeholder='Age'/> */}
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c2txt1} placeholder='Email'/>
        <TextInput style={Styles.c2txt2} placeholder='Doctor'/>
        {/* <SelectListProps data={data} setSelected={setSelected}/> */}
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c2txt1} placeholder='Phone Number'/>
        <TextInput style={Styles.c2txt2} placeholder='Doctor'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.lastname} placeholder='Guardian Name'/>       
      </View>

      <View style={Styles.subcontainer1}>       
        <TextInput style={Styles.lastname} placeholder='Guardian Email'/>
      </View>

      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.lastname} placeholder='Guardian Phone'/>
      </View>


      <View style={Styles.subcontainer2}>
        <TextInput style={Styles.s2txt1} placeholder='Address'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c3txt1} placeholder='City'/>
        <TextInput style={Styles.c3txt1} placeholder='State'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c3txt1} placeholder='Country'/>
        <TextInput style={Styles.c3txt1} placeholder='Pin Code'/>
      </View>        
      </View>
      
    )
  }
  
  const Submit = () => {
    return (
      <View style={Styles.submit}>
        <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Sucessfull')}>
          <Text style={Styles.btntxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }


  return (
    
    <View style = {Styles.maincontainer}>
      <View >
        <SubContainer1/>
        <Submit/>
      </View>
    </View>
 
  )



}

const Styles = StyleSheet.create({
    maincontainer:{
      
        backgroundColor: "#ebedfa",
        padding:5
    },
  
   
      icon:{
        backgroundColor:'white',
        borderRadius:20,
        // height:'100%',
        justifyContent:'center',
        marginLeft:25,
        
      },
      subcontainer1:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5,
    },
      subcontainer2:{
        alignItems:'center',
        marginTop:5,
    },
      subcontainer1txt:{
        fontSize:15,
        backgroundColor:'white',
        // height:'50%',
        padding:5,
        width:'70%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        // marginLeft:5,
        
      },
      genderheading:{
        fontSize:18,
      },
        c2txt1:{
        fontSize:15,
        backgroundColor:'white',
        // height:'100%',
        padding:5,
        width:'70%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        // marginLeft:5,
        
      },
        c3txt1:{
        fontSize:15,
        backgroundColor:'white',
        // height:50,
        padding:5,
        width:'48%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        marginLeft:5,
      },
        lastname:{
        fontSize:15,
        backgroundColor:'white',
        // height:50,
        padding:5,
        width:'70%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        // marginLeft:5,
      },
        s2txt1:{
        fontSize:15,
        backgroundColor:'white',
        // height:50,
        padding:5,
        width:'98%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        
      },
        c2txt2:{
        fontSize:15,
        backgroundColor:'white',
        // height:50,
        padding:5,
        width:'27%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        marginLeft:5,
        marginTop:5,
      },
      gender:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:80
      },
      genderContainer:{
        marginLeft:10,
      },
      submit:{
        borderRadius:20,
        padding:10,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
      
      },
      btntxt:{
        backgroundColor:'#324ae5',
        color:'white',
        width:200,
        textAlign:'center',
        padding:10,
        fontSize:20,
        borderRadius:30



      }
        
})

export default PatientDetails