
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   // TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { TextInput } from 'react-native-paper';

// import { useState } from "react";
// import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
// // import RNPickerSelect from "react-native-picker-select";
// import { Picker } from "@react-native-picker/picker";
// import axios from "axios";
// import Toast from "react-native-toast-message";

// const PatientDetails = ({ navigation }) => {
//   const clearTextInputs = () => {
//     setPatientID("");
//     setUniqueHID(""),
//       setFName(""),
//       setLName(""),
//       setEmail(""),
//       setPhone(""),
//       setAge(""),
//       setWeight(""),
//       setGender(""),
//       setGName(""),
//       setGEmail(""),
//       setGPhone(""),
//       setAddress(""),
//       setCity(""),
//       setState(""),
//       setCountry(""),
//       setPin(""),
//       setDoctorID(""),
//       setDepartmentID("");
//   };
//   const handleFormSubmit = () => {
//     if (
//       patientID && uniqueHID && fName && lName && email && phone &&
//       age && weight && gender && gName && gEmail && city &&
//       state && country && pin && doctorID && departmentID
//     ) {
//       console.log(" detail saved");
//       clearTextInputs();
//       Toast.show({
//         type: "done",
//         position: "top",
//         topOffset: 0,
//         text1: "login Sucessfull",
//       });

//       ApiPatientDetails();
//       navigation.navigate("Sucessfull");
//     } else {
//       console.log("All fields are required");
//       Toast.show({
//         type: "warning",
//         position: "top",
//         topOffset: 0,
//         text1: "All fields are required!",
//       });
//     }
//   };

//   const toastConfig = {
//     warning: ({ text1, text2 }) => (
//       <View
//         style={{
//           height: 30,
//           width: "100%",
//           backgroundColor: "orange",
//           padding: 4,
//         }}
//       >
//         <Text>{text1}</Text>
//         <Text>{text2}</Text>
//       </View>
//     ),
//     done: ({ text1, text2 }) => (
//       <View
//         style={{
//           height: 30,
//           width: "100%",
//           backgroundColor: "green",
//           padding: 4,
//         }}
//       >
//         <Text>{text1}</Text>
//         <Text>{text2}</Text>
//       </View>
//     ),
//   };

//   const [patientID, setPatientID] = useState("");
//   const [uniqueHID, setUniqueHID] = useState("");
//   const [fName, setFName] = useState("");
//   const [lName, setLName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState("");
//   const [weight, setWeight] = useState("");
//   const [gender, setGender] = useState("");
//   const [gName, setGName] = useState("");
//   const [gEmail, setGEmail] = useState("");
//   const [gPhone, setGPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [country, setCountry] = useState("");
//   const [pin, setPin] = useState("");
//   const [doctorID, setDoctorID] = useState("");
//   const [departmentID, setDepartmentID] = useState("");
//   // console.log("patientID:", patientID);
//   // console.log("uniqueHID:", uniqueHID);
//   // console.log("fName:", fName);
//   // console.log("lName:", lName);
//   // console.log("email:", email);
//   // console.log("phone:", phone);
//   // console.log("age:", age);
//   // console.log("weight:", weight);
//   // console.log("gender:", gender);
//   // console.log("gName:", gName);
//   // console.log("gEmail:", gEmail);
//   // console.log("gPhone:", gPhone);
//   // console.log("address:", address);
//   // console.log("city:", city);
//   // console.log("state:", state);
//   // console.log("country:", country);
//   // console.log("pin:", pin);
//   // console.log("doctorID:", doctorID);
//   // console.log("departmentID:", departmentID);

//   const ApiPatientDetails = () => {
//     axios
//       .post(
//         "http://localhost:8000/addOP",

//         {
//           patientID: patientID,
//           uniqueHID: uniqueHID,
//           fName: fName,
//           lName: lName,
//           email: email,
//           phone: phone,
//           age: age,
//           weight: weight,
//           gender: gender,
//           gName: gName,
//           gEmail: gEmail,
//           gPhone: gPhone,
//           address: address,
//           city: city,
//           state: state,
//           country: country,
//           pin: pin,
//           doctorID: doctorID,
//           departmentID: departmentID,
//         }
//       )
//       .then((res) => console.log("data submitted"))
//       .catch((err) => console.log("error", err));
//   };
//   // const handle

//   const Phase1 = () => {
//     return (
//       <View style={styles.container}>
//         <Toast config={toastConfig} />
//         <View style={styles.subcontainer1}>

//           <TextInput mode={"outlined"} value={patientID} style={styles.subcontainer1txt} onChangeText={(e) => { setPatientID(e) }} placeholder="Patient Id"
//           />
//           <TextInput mode={"outlined"} style={styles.subcontainer1txt} placeholder="Unique Health Id" value={uniqueHID} onChangeText={(e) => setUniqueHID(e)}
//           />
//           <TextInput mode={"outlined"} value={fName} onChangeText={(e) => { setFName(e) }} style={styles.subcontainer1txt} placeholder="First Name"
//           />
//           <TextInput mode={"outlined"} value={lName} onChangeText={(e) => { setLName(e) }} style={styles.subcontainer1txt} placeholder="Last Name"
//           />
//           <TextInput mode={"outlined"} value={email} onChangeText={(e) => { setEmail(e) }} style={styles.subcontainer1txt} placeholder="Email"
//           />
//           <TextInput mode={"outlined"} style={styles.subcontainer1txt} placeholder="Phone Number" value={phone} onChangeText={(e) => { setPhone(e) }}
//           />
//           <TextInput mode={"outlined"} style={styles.subcontainer1txt} placeholder="Guardian Name" value={gName} onChangeText={(e) => { setGName(e) }}
//           />
//           <TextInput mode={"outlined"} style={styles.subcontainer1txt} placeholder="Guardian Email" value={gEmail} onChangeText={(e) => { setGEmail(e) }}
//           />
//           <TextInput mode={"outlined"} style={styles.subcontainer1txt} placeholder="Guardian Phone no" value={gPhone} onChangeText={(e) => { setGPhone(e) }}
//           />
//         </View>
//         <View style={styles.subcontainer2}>
//           <View style={styles.iconcontainer}>
//             <MaterialCommunityIcons
//               style={styles.icon}
//               name="human-male"
//               size={70}
//             />
//           </View>
//           <TextInput mode={"outlined"} value={age} onChangeText={(e) => { setAge(e) }} style={styles.subtxt} placeholder="Age"
//           />
//           <TextInput mode={"outlined"} value={weight} onChangeText={(e) => { setWeight(e) }} style={styles.subtxt} placeholder="Weight"
//           />

//           <View style={styles.doctor}>
//             <Text style={styles.txt}>Gender:</Text>
//             <View style={styles.picker}>

//               {/* <Picker value={gender} onTextChange={(e) => setGender(e)}> */}
//               <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)}>
//                 <Picker.Item label="Male" value="Male" />
//                 <Picker.Item label="Female" value="Female" />
//               </Picker>
//             </View>
//           </View>
//           <View style={styles.doctor}>
//             <Text style={styles.txt}>Doctor:</Text>
//             <View style={styles.picker}>
//               {/* <Picker value={doctorID} onTextChange={(e) => setDoctorID(e)}> */}
//               <Picker selectedValue={doctorID} onValueChange={(itemValue) => setDoctorID(itemValue)}>
//                 <Picker.Item label="Dr.Zab" value="Dr.Zab" />
//                 <Picker.Item label="Dr.Mac" value="Dr.Mac" />
//               </Picker>
//             </View>
//           </View>
//           <View style={styles.Department}>
//             <Text style={styles.txt}>Department:</Text>
//             <View style={styles.picker}>
//               {/* <Picker selectedValue={departmentID} onTextChange={(e) => setDepartmentID(e)}  > */}
//               <Picker selectedValue={departmentID} onValueChange={(itemValue) => setDepartmentID(itemValue)}>
//                 <Picker.Item label="Surgery" value="Surgery" />
//                 <Picker.Item label="Neurology" value="Neurology" />
//               </Picker>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const Phase2 = () => {
//     return (
//       <View>
//         {/* <View style={styles.phase2container2}> */}
//         <TextInput mode={"outlined"} value={address} onChangeText={(e) => { setAddress(e) }} style={styles.s2txt1} placeholder="Address"
//         />

//         {/* </View> */}
//         <View style={styles.container1}>
//           <View style={styles.phase2container1}>
//             <TextInput mode={"outlined"} value={city} onChangeText={(e) => { setCity(e) }} style={styles.c3txt1} placeholder="City"
//             />
//             <TextInput mode={"outlined"} value={state} onChangeText={(e) => { setState(e) }} style={styles.c3txt1} placeholder="State"
//             />
//           </View>
//           <View style={styles.phase2container1}>
//             <TextInput mode={"outlined"} value={country} onChangeText={(e) => { setCountry(e) }} style={styles.c3txt1} placeholder="Country"
//             />
//             <TextInput mode={"outlined"} value={pin} onChangeText={(e) => { setPin(e) }} style={styles.c3txt1} placeholder="Pin Code"
//             />
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const Submit = () => {
//     return (
//       <View style={styles.submit}>
//         <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
//           <Text style={styles.btntxt}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <ScrollView style={styles.maincontainer}>
//       <Phase1 />
//       <Phase2 />
//       <Submit />
//     </ScrollView>
//   );
// };

// export default PatientDetails;

// const styles = StyleSheet.create({
//   maincontainer: {
//     backgroundColor: "#ebedfa",
//     padding: 10,
//     width: "100%",
//     height: "100%",
//   },

//   container: {
//     flexDirection: "row", width: "100%",
//     marginTop: 30,
//     justifyContent: "space-between",
//   },
//   container1: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   subcontainer1: {
//     width: "50%",
//   },
//   subcontainer2: {
//     width: "40%",
//     // alignItems: "center",
//   },
//   subcontainer1txt: {
//     fontSize: 15,
//     //   backgroundColor: "white",
//     //   padding: 10,
//     // borderRadius: 20,
//     // borderWidth: 2,
//     // borderColor: "#d9d9d9",
//     // alignItems: "center",
//     textAlign: "center",
//     marginTop: 10,
//   },
//   subtxt: {
//     fontSize: 15,
//     //   backgroundColor: "white",
//     //   padding: 10,
//     //   borderRadius: 20,
//     //   borderWidth: 2,
//     //   borderColor: "#d9d9d9",
//     //   alignItems: "center",
//     textAlign: "center",
//     marginTop: 10,
//     //   width: 130,
//   },

//   submit: {
//     borderRadius: 20,
//     padding: 10,
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   iconcontainer: {
//     backgroundColor: "white",
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: "#d9d9d9",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   btntxt: {
//     backgroundColor: "#324ae5",
//     color: "white",
//     width: 200,
//     textAlign: "center",
//     padding: 10,
//     fontSize: 20,
//     borderRadius: 30,
//   },
//   genderContainer: {
//     marginTop: 10,
//     width: 100,
//   },
//   genderheading: {
//     padding: 1,
//   },
//   gender: {
//     flexDirection: "row",
//     padding: 2,
//     justifyContent: "space-between",
//     width: 100,
//   },
//   phase2container2: {
//     backgroundColor: "white",
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: "#d9d9d9",
//     // justifyContent: "center",
//     // alignItems: "center",
//     padding: 10,
//     marginTop: 10,
//   },
//   s2txt1: {
//     fontSize: 15,
//     //   backgroundColor: "white",
//     //   padding: 10,
//     // borderRadius: 20,
//     // borderWidth: 2,
//     // borderColor: "#d9d9d9",
//     // alignItems: "center",
//     textAlign: "center",
//     marginTop: 10,
//   },

//   c3txt1: {
//     //   backgroundColor: "white",
//     //   borderRadius: 20,
//     //   borderWidth: 2,
//     //   borderColor: "#d9d9d9",
//     textAlign: "center",
//     //   padding: 10,
//     width: 160,
//     marginTop: 10,
//   },

//   doctor: {
//     // height: 100, 
//     width: "100%",
//     color: "black",
//     padding: 5,
//     marginTop: 20,
//     marginBottom: 20,
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   Department: {
//     width: "100%",
//     color: "black",
//     padding: 5,
//     marginTop: 20,
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   picker: {
//     backgroundColor: "white",
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: "#d9d9d9",
//     marginTop: 10,
//   },
// });

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios'
// import { Picker } from "@react-native-picker/picker";




const PatientDetails = ({ navigation }) => {
  const [patientID, setPatientID] = useState("");
  const [uniqueHID, setUniqueHID] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [gName, setGName] = useState("");
  const [gEmail, setGEmail] = useState("");
  const [gPhone, setGPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [departmentID, setDepartmentID] = useState("");

  const clearTextInputs = () => {
    setPatientID("");
    setUniqueHID(""),
      setFName(""),
      setLName(""),
      setEmail(""),
      setPhone(""),
      setAge(""),
      setWeight(""),
      setGender(""),
      setGName(""),
      setGEmail(""),
      setGPhone(""),
      setAddress(""),
      setCity(""),
      setState(""),
      setCountry(""),
      setPin(""),
      setDoctorID(""),
      setDepartmentID("");
  };

  const ApiPatientDetails = () => {
    axios
      .post(
        "http://localhost:8000/addOP",

        {
          patientID: patientID,
          uniqueHID: uniqueHID,
          fName: fName,
          lName: lName,
          email: email,
          phone: phone,
          age: age,
          weight: weight,
          gender: gender,
          gName: gName,
          gEmail: gEmail,
          gPhone: gPhone,
          address: address,
          city: city,
          state: state,
          country: country,
          pin: pin,
          doctorID: doctorID,
          departmentID: departmentID,
        }
      )
      .then((res) => console.log("data submitted"))
      .catch((err) => console.log("error", err));
  };

  const handleFormSubmit = () => {
    if (
      patientID && uniqueHID && fName && lName && email && phone &&
      age && weight && gender && gName && gEmail && gPhone && address && city &&
      state && country && pin && doctorID && departmentID
    ) {
      ApiPatientDetails()
      console.log('form submitted');
      clearTextInputs()
    } else {
      console.log('All fields are required');
    }
  }
  return (
    <ScrollView>
      <View>
        <View>
          <TextInput mode={"outlined"} value={patientID} style={styles.subcontainer1txt} onChangeText={(e) => { setPatientID(e) }} placeholder="Patient Id"
          />
          <TextInput mode={"outlined"} value={uniqueHID} style={styles.subcontainer1txt} onChangeText={(e) => { setUniqueHID(e) }} placeholder="uniqueHID Id"
          />
          <TextInput mode={"outlined"} value={fName} style={styles.subcontainer1txt} onChangeText={(e) => { setFName(e) }} placeholder="fName Id"
          />
          <TextInput mode={"outlined"} value={lName} style={styles.subcontainer1txt} onChangeText={(e) => { setLName(e) }} placeholder="lName Id"
          />
          <TextInput mode={"outlined"} value={email} style={styles.subcontainer1txt} onChangeText={(e) => { setEmail(e) }} placeholder="email Id"
          />
          <TextInput mode={"outlined"} value={phone} style={styles.subcontainer1txt} onChangeText={(e) => { setPhone(e) }} placeholder="phone Id"
          />
          <TextInput mode={"outlined"} value={age} style={styles.subcontainer1txt} onChangeText={(e) => { setAge(e) }} placeholder="age Id"
          />
          <TextInput mode={"outlined"} value={weight} style={styles.subcontainer1txt} onChangeText={(e) => { setWeight(e) }} placeholder="weight Id"
          />
          <TextInput mode={"outlined"} value={gender} style={styles.subcontainer1txt} onChangeText={(e) => { setGender(e) }} placeholder="gender Id"
          />
          <TextInput mode={"outlined"} value={gName} style={styles.subcontainer1txt} onChangeText={(e) => { setGName(e) }} placeholder="gName Id"
          />
          <TextInput mode={"outlined"} value={gEmail} style={styles.subcontainer1txt} onChangeText={(e) => { setGEmail(e) }} placeholder="gEmail Id"
          />
          <TextInput mode={"outlined"} value={gPhone} style={styles.subcontainer1txt} onChangeText={(e) => { setGPhone(e) }} placeholder="gPhone Id"
          />
          <TextInput mode={"outlined"} value={address} style={styles.subcontainer1txt} onChangeText={(e) => { setAddress(e) }} placeholder="address Id"
          />
          <TextInput mode={"outlined"} value={city} style={styles.subcontainer1txt} onChangeText={(e) => { setCity(e) }} placeholder="City Id"
          />
          <TextInput mode={"outlined"} value={state} style={styles.subcontainer1txt} onChangeText={(e) => { setState(e) }} placeholder="state Id"
          />
          <TextInput mode={"outlined"} value={country} style={styles.subcontainer1txt} onChangeText={(e) => { setCountry(e) }} placeholder="country Id"
          />
          <TextInput mode={"outlined"} value={pin} style={styles.subcontainer1txt} onChangeText={(e) => { setPin(e) }} placeholder="pin Id"
          />
          <TextInput mode={"outlined"} value={doctorID} style={styles.subcontainer1txt} onChangeText={(e) => { setDoctorID(e) }} placeholder="doctorID Id"
          />
          <TextInput mode={"outlined"} value={departmentID} style={styles.subcontainer1txt} onChangeText={(e) => { setDepartmentID(e) }} placeholder="departmentID Id"
          />


        </View>
        <View style={styles.submit}>
          <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.btntxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default PatientDetails

const styles = StyleSheet.create({

  submit: {
    borderRadius: 20,
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
})
