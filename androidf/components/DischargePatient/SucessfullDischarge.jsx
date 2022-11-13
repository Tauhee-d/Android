import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const SucessfullDischarge = () => {
  return (
    <View style={Styles.maincontainer}>

      <View style={Styles.subcontainer}>
        <AntDesign style={Styles.icon} name='checkcircle' size={70} />
        <Text style={Styles.text}>Sucessfully</Text>
        <Text style={Styles.text}>Discharged</Text>
        <Text style={Styles.text1}>Go to Payment?</Text>
        <View style={Styles.btn}>
          <View style={Styles.btn1}>
            <TouchableOpacity>
              <Text style={Styles.btntext}>No</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.btn2}>
            <TouchableOpacity>
              <Text style={Styles.btntext}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  )
}

const Styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ebedfa',
    justifyContent: 'center',
  },
  subcontainer: {
    backgroundColor: 'white',
    height: '43%',
    width: '90%',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5,
    elevation: 8
  },
  text: {
    fontSize: 25,

  },
  text1: {
    fontSize: 25,
    margin: 10,
  },
  icon: {
    color: '#00b359',
    margin: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 250,
    marginTop: 20
  },

  btn2: {
    borderRadius: 20,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#324ae5',
  },
  btn1: {
    borderRadius: 20,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#324ae5',
  },
  btntext: {
    color: 'white',
    fontSize: 25,


  },


})
export default SucessfullDischarge;





