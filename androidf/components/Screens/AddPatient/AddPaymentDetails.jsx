import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';


const AddPaymentDetails = ({ navigation }) => {
  const handleOnPay = () => {
    navigation.navigate('Pay By')
  }
  return (
    <View style={styles.maincontainer}>
      <View style={styles.body}>
        <View style={styles.iconconatiner}>
          <Ionicons name="ios-person-outline" size={45} />
        </View>
        <View style={styles.txtcontainer}>
          <Text style={styles.heading}>ABC </Text>
          <Text style={styles.txt}>Patient ID:</Text>
          <Text style={styles.txt}>UHID:</Text>
          <Text style={styles.txt}>Dr.Name</Text>
        </View>
      </View>

      <View style={styles.billdetails}>
        <Text style={styles.billdetailstxt}>Bill Details</Text>
        <View style={styles.billdetailsfee}>
          <Text style={styles.billdetailsfeetxt}>Inpatient Fee</Text>
          <TextInput style={styles.billdetailsfeetxtinput}>
            <FontAwesome name="rupee" size={20} />

          </TextInput>

        </View>
      </View>
      <View style={styles.payment}>
        <TouchableOpacity style={styles.paymentbtn} onPress={handleOnPay}>
          <Text style={styles.paymentbtntxt}>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddPaymentDetails

const styles = StyleSheet.create({
  maincontainer: {
    margin: 20,
    height: '100%',
    // width: '100%'
  },
  body: {
    flexDirection: "row",
    // margin: 4,
    padding: 4,
    flex: 1
  },
  iconconatiner: {
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "white",
    // marginLeft: 20,
    height: 120,
    // width: 120,
    width: '30%',
    // flex: 1


  },
  txtcontainer: {
    height: 120,
    width: '65%',
    backgroundColor: "white",
    marginLeft: '5%',
    padding: 15,

  },
  heading: {
    fontSize: 20,
  },
  txt: {
    marginTop: 5
  },
  billdetails: {
    flex: 2,
    // borderWidth: 1,
    padding: 20,
    backgroundColor: 'white',
    // justifyContent: 'flex-end'
  },
  billdetailsfee: {
    flexDirection: 'row',
    marginTop: 250,
  },
  billdetailstxt: {
    fontSize: 20
  },
  billdetailsfeetxtinput: {
    // justifyContent: 'flex-end'
    width: 250,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20

  },
  payment: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: 'flex-end',
    marginLeft: '60%',
    marginBottom: '15%'
  },
  paymentbtn: {
    backgroundColor: 'blue',
    padding: 15,
    width: 150,
    borderRadius: 10
  },
  paymentbtntxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
})