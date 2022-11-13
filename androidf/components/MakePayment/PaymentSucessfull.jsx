import {View , Text , TouchableOpacity,StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

const PaymentSucessfull = () =>{
return(
  <View style={Styles.maincontainer}>
       
       <View style={Styles.subcontainer}>
          <AntDesign style={Styles.icon} name='checkcircle' size={70}/>
          <Text style={Styles.text}>Payment</Text>
          <Text style={Styles.text}>Sucessfull</Text>
          <View style={Styles.btn}>
            <View style={Styles.btn1}>
              <TouchableOpacity style={Styles.touchbtn}>
                  <AntDesign style={Styles.touchicon} name='sharealt' size={20}/>
                  <Text style={Styles.btntext}>Share</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.btn2}>
              <TouchableOpacity style={Styles.touchbtn}>
                  <AntDesign style={Styles.touchicon} name='printer' size={20}/>
                  <Text style={Styles.btntext}>Print</Text>
              </TouchableOpacity>
            </View>
          </View>
       </View>
  
  </View>
)
}

const Styles = StyleSheet.create({
    maincontainer:{
      height:'100%',
      width:'100%',
      alignItems:'center',
      backgroundColor:'#ebedfa',
      justifyContent:'center',
    },
    subcontainer:{
      backgroundColor:'white',
      height:'43%',
      width:'90%',
      borderRadius:60,
      justifyContent:'center',
      alignItems:'center',
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity:  0.20,
      shadowRadius: 5,
      elevation: 8

      
    },
    text:{
      fontSize:25,
    },
    icon:{
      color:'#00b359',
      margin:30,
    },
    btn:{
      flexDirection:'row',
      justifyContent:'space-evenly',
      width:250,
      marginTop:20
    },
    btn1:{
      borderRadius:20,
      height:40,
      width:110,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#324ae5',
    },
    btn2:{
      borderRadius:20,
      height:40,
      width:110,
      // justifyContent:'center',
      justifyContent:'space-around',

      alignItems:'center',
      backgroundColor:'#324ae5',
    },
    btntext:{
      color:'white',
      fontSize:20,
      marginLeft:10
    },
    touchbtn:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    
    },
 
   

})
export default PaymentSucessfull;





