import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import Img from './Images/doc1.jpeg'


const Dashboard = ({ navigation }) => {
  return (
    <View style={Styles.maincontainer}>
      <View style={Styles.container}>
        <Image source={Img} />

        <View style={Styles.subcontainer}>


          <View style={Styles.subcomponent1}>
            <View style={Styles.component2}>
              <Ionicons style={Styles.textcolor} name="person-add" size={25} />
              <TouchableOpacity onPress={() => navigation.navigate('Add Patient')}>
                <Text style={Styles.textcolor1}>Add Patient</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={Styles.component}>

            <View style={Styles.subcomponent}>
              <TouchableOpacity onPress={() => navigation.navigate('Search For Patient')}>
                <Ionicons style={Styles.textcolor} name="person" size={25} />
                <Text style={Styles.textcolor}>InPatients List</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.subcomponent}>
              <TouchableOpacity onPress={() => navigation.navigate('OutPatient')}>
                <Ionicons
                  style={Styles.textcolor}
                  name="person-remove"
                  size={25}
                />
                <Text style={Styles.textcolor}>OutPatients List</Text>
              </TouchableOpacity>
            </View>


          </View>
        </View>
        <View style={Styles.subcontainer}>
          <View style={Styles.component}>

            <View style={Styles.subcomponent}>
              <TouchableOpacity onPress={() => navigation.navigate('MedicalRecords')} >
                <Ionicons
                  style={Styles.textcolor}
                  name="receipt-outline"
                  size={25}
                />
                <Text style={Styles.textcolor}>Medical Records</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.components}>
              <View style={Styles.subcomponent}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Payment')}
                >
                  <MaterialIcons
                    style={Styles.textcolor}
                    name="payments"
                    size={25}
                  />
                  <Text style={Styles.textcolor}>Payments</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>


      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    width: "100%",
    justifycontent: "center",
    alignItems: "center",
    backgroundColor: "#ebedfa",
  },
  container: {
    height: "100%",
    width: "100%",
    marginTop: "10%",
  },
  containerheading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 20
  },
  heading: {
    fontSize: 20,
    marginRight: '40%'
  },
  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  subcontainer2: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subheading: {
    fontSize: 15,
    marginLeft: "5%",
    marginTop: "10%",
  },
  component: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '80%'
  },
  components: {
    marginTop: "5%",
    flexDirection: "row",
    marginLeft: "9%",
  },
  component1: {
    marginTop: "5%",
    marginLeft: "9%",
  },
  component2: {
    marginTop: "5%",
    marginLeft: "9%",
    flexDirection: 'row'
  },
  subcomponent: {
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
  subcomponent1: {
    marginTop: 15,
    width: '80%',
    height: 80,
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
  subcomponents: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    textAlign: "center",
    marginLeft: 30,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5,
    elevation: 10
  },

  textcolor: {
    color: "#8f9094",
    textAlign: "center",
  },
  textcolor1: {
    color: "#8f9094",
    textAlign: "center",
    marginLeft: 20
  },

});

export default Dashboard;
