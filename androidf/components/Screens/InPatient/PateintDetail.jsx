import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { Ionicons,Fontisto,MaterialIcons} from '@expo/vector-icons';
// import {Picker} from"@react-native-picker/picker";
import  {useState} from'react';


const PateintDetails = ({navigation}) =>{


   

    const Header = () =>{
        return(
            <View style={style.header}>
                <Text style={style.headertxt}>Pateint Details</Text>
            </View>
        )
    }
    const Pateint = () =>{
        return(
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

    const Doctor = () =>{
        return(
            <View style={style.doctorcontainer}>
                <Text style={style.doctor}>Doctor Details</Text>
                <Text style={style.doctortxt}>Attending Physician:</Text>
                <Text style={style.doctortxt}>Department:</Text>
            </View>
        )
    }

    const Diagnosis =() =>{
      
        const [Enable, setEnable]  = useState("Diagnosis");
        
        return (
          <View style={style.pickercontainer}>
              {/* <Picker
                selectedValue={Enable}
                style={{  width:'100%' }}
                mode={"dialog"}
                onValueChange={(itemValue) => setEnable(itemValue)}
             >
                 
                <Picker.Item style={style.pickertxt} label="Diagnosis"value="Diagnosis"/>
                <Picker.Item style={style.pickertxt} label="D1"value="D1"/>
                <Picker.Item style={style.pickertxt} label="D2"value="D2"/>
                <Picker.Item style={style.pickertxt} label="D3"value="D3"/>
                <Picker.Item style={style.pickertxt} label="D5"value="D5"/>
                <Picker.Item style={style.pickertxt} label="D4"value="D4"/>
              </Picker> */}
          </View>
       );
      }

      const TreatmentDetails = () =>{

        const [Treatment,setTreatment] = useState('Treatment Details')

        return(
            <View style={style.pickercontainer}>
                <Picker 
                selectedValue={Treatment}
                mode={"dialog"}
                onValueChange={(itemValue) => setTreatment(itemValue)}
                >
                    <Picker.Item style={style.pickertxt} label='Treatment Details' value='Treatment Details'/>
                    <Picker.Item style={style.pickertxt} label='T1' value='T1'/>
                    <Picker.Item style={style.pickertxt} label='T2' value='T2'/>
                    <Picker.Item style={style.pickertxt} label='T3' value='T3'/>
                    <Picker.Item style={style.pickertxt} label='T4' value='T4'/>
                    <Picker.Item style={style.pickertxt} label='T5' value='T5'/>
                </Picker>
            </View>
        )
      }

      const MakeInPatient = () =>{
        return(
            <View style={style.button}>
                <TouchableOpacity style={style.btn}
                    onPress={ () => navigation.navigate('Reason In Patient')}
                >
                    <Fontisto name='bed-patient' size={40}/>
                    <Text style={style.btntext}>Make InPateint</Text>
                </TouchableOpacity>
            </View>
        )
      }
      const DischargePatient = () =>{
        return(
            <View style={style.button}>
                <TouchableOpacity style={style.btn} 
                onPress={ () => navigation.navigate('Discharge Patient')}
                >
                    <MaterialIcons name='do-not-disturb-on' size={40}/>
                    <Text style={style.btntext}>Discharge Patient</Text>
                </TouchableOpacity>
            </View>
        )
      }


      

  return(
    <View style={style.maincontainer} >
    <View style={style.container}>
        {/* <Header/> */}
        <Pateint/>
        <Doctor/>
        <Diagnosis/>
        <TreatmentDetails/>
        <MakeInPatient/>
        <DischargePatient/>
    </View>
    </View>
  )  
}

const style = StyleSheet.create({
    maincontainer:{
        backgroundColor:'#ebedfa',
        height:'100%',
        width:'100%',
        
    },
    container:{
        margin:10

    },
    header:{
        marginTop:'10%',
        marginBottom:'10%'
    },
    headertxt:{
        fontSize:30,
        textAlign:'center',
    },
    pateintcontainer:{
        flexDirection:'row',
        backgroundColor:'white',
        marginBottom:10,
        marginTop:10,
        padding:5,
        alignItems:'center',
        shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity:  0.20,
          shadowRadius: 5,
          elevation: 10
        
    },

    pateint:{
      
        marginBottom:10,
    },
    pateintheading:{
        fontSize:20,
        marginTop:15
    },
    doctorcontainer:{
        backgroundColor:'white',
        marginBottom:10,
     
        padding:5,
        shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity:  0.20,
          shadowRadius: 5,
          elevation: 10

    },
    doctor:{
        fontSize:20,
        textDecorationLine:'underline',
        marginLeft:10
    },
    doctortxt:{
        marginLeft:10,
        marginTop:2
    },
    pickercontainer:{
        backgroundColor:'white',
        marginBottom:10,
        padding:5,
        shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity:  0.20,
          shadowRadius: 5,
          elevation: 10
    },
    pickertxt:{
       fontSize:20
    },
    button:{
        backgroundColor:'white',
        width:'95%',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:20,
        marginTop:'5%'
        
    },
    btn:{
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        
    },
    btntext:{
        color:'black',
        fontSize:20,
        marginLeft:80,
        justifyContent:'center',
        marginTop:5
      
    }

    
})

export default PateintDetails; 



