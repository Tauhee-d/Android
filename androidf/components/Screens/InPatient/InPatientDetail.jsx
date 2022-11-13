import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";


const OutPatientDetails = ({ navigation }) => {
  const handleOnAddSysmptom = () => {
    navigation.navigate('Symptoms')
  }
  const handleOnAddTreatment = () => {
    navigation.navigate('Treatments')
  }
  const handleOnDischarge = () => {
    navigation.navigate('InPatientDischarge')
  }
  return (
    <View style={styles.maincontainer}>
      <TouchableOpacity>
        <View style={styles.body}>
          <View style={styles.iconconatiner}>
            <Ionicons name="person" size={45} />
          </View>
          <View style={styles.txtcontainer}>
            <Text style={styles.heading}>XYZ </Text>
            <Text style={styles.txt}>patientID:</Text>
            <Text style={styles.txt}>UHID:</Text>
            <Text style={styles.txt}>Dr.ID</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.symptomscontainer}>
        <View style={styles.subcontainer}>

          <Text>Symptoms:</Text>
          <TouchableOpacity onPress={handleOnAddSysmptom}><Text style={styles.subcontainertxt}>+</Text></TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.containertxt}>Arm Pain</Text>
          <Text style={styles.containertxt}>Arm Pain</Text>
          <Text style={styles.containertxt}>Arm Pain</Text>
        </View>
        <Text style={styles.plaintxt}></Text>
      </View>
      <View style={styles.traetmentcontainer}>
        <View style={styles.subcontainer}>

          <Text>Treatment:</Text>
          <TouchableOpacity onPress={handleOnAddTreatment}><Text style={styles.subcontainertxt}>+</Text></TouchableOpacity>
        </View>

      </View>
      <View style={styles.buttonDischarge}>
        <TouchableOpacity onPress={handleOnDischarge} style={styles.Discharge}><Text style={styles.btntxt}>Discharge</Text></TouchableOpacity>
      </View>
    </View >
  )
}

export default OutPatientDetails

const styles = StyleSheet.create({
  maincontainer: {
    margin: 15
  },
  body: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 4,
    padding: 4,
  },
  iconconatiner: {
    justifyContent: "center",
    marginLeft: 20,
  },
  heading: {
    fontSize: 20,
  },
  txtcontainer: {
    marginLeft: 20,
  },
  containertxt: {
    backgroundColor: 'white',
    width: 100,
    borderRadius: 5,
    padding: 5,
    marginLeft: 15,
    marginTop: 10
  },
  container: {
    flexDirection: 'row'
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  subcontainertxt: {
    backgroundColor: 'white',
    width: 40,
    height: 25,
    textAlign: 'center',
    fontSize: 25,
    borderWidth: 1
  },
  traetmentcontainer: {
    height: '20%'
  },
  plaintxt: {
    borderWidth: 1,
    height: 1,
    marginTop: 20
  },
  plaintreatmenttxt: {
    borderWidth: 1,
    height: 1,
    marginTop: 20,
    flexDirection: 'column'
  },
  buttonDischarge: {

    alignItems: 'center',
    marginTop: '90%'

  },

  Discharge: {
    backgroundColor: 'blue',
    width: '90%',
    padding: 10,
    borderRadius: 15
  },
  btntxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }

})