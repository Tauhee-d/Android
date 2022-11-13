import * as react from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const PateintType = ({ navigation }) => {
  return (
    <View style={Styles.maincontainer}>


      <View style={Styles.btncontainer}>
        <View style={Styles.subcontainer}>
          <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Patient Detail')}>
            <Ionicons name="person-remove" size={32} />
            <Text style={Styles.btntext}>OutPateint</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.subcontainer}>
          <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('Patient Detail')}>
            <Ionicons style={Styles.icon} name="person" size={32} />
            <Text style={Styles.btntext}>InPateints</Text>
          </TouchableOpacity>
        </View>
      </View>



    </View>

  );
};

const Styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ebedfa',
    justifyContent: 'center'
  },

  btncontainer: {
    width: "90%",
    flexDirection: 'row',
    justifyContent: 'space-around'

  },

  subcontainer: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5,
    elevation: 8
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 12
  },
  btntext: {
    fontSize: 18,

  },



})

export default PateintType;
