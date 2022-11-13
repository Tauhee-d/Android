

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import { TextInput } from 'react-native-paper'
import { Ionicons, Fontisto, MaterialIcons } from "@expo/vector-icons";
// import {Picker} from"@react-native-picker/picker";
import { useEffect, useState } from "react";
import PropsType from "prop-types";
import axios from "axios";

const SearchForPatient = ({ navigation }) => {
  const [responseData, setResponseData] = useState();
  // const [masterData, setMasterData] = useState();
  const [searchData, setSearchData] = useState(searchData);
  const [loading, setLoading] = useState(false);

  const handleOnFilter = () => {
    navigation.navigate("Filter")
  }

  const handleOnClick = () => {
    navigation.navigate("OutPatientDetails");
    // console.log("clicked");
  };

  const patientList = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/addOP")
      .then((response) => {
        setResponseData(response.data);
        // setMasterData(response.data);
        setLoading(false);

      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    patientList();
  }, []);
  // const filter = () => {

  // }

  // const searchFilter = (text) => {
  //   if (text) {
  //     const newData = masterData.filter((item) => {
  //       const itemData = item.fName + " " + item.lName ?
  //         item.fName + " " + item.lName.toUpperCase() : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     })
  //     setResponseData(newData)
  //     setSearchData(text)
  //   } else {
  //     setResponseData(masterData)
  //     setSearchData(text)

  //   }
  // }

  const searchFilter = (text) => {
    const data = searchData
    // const search = data.filter((item) => {
    // return item.fName + " " + item.lName.toLowerCase().includes(text.toLowerCase())
    // })
    // setSearchData = (search)
  }
  const SearchBar = () => {
    return (
      <View>
        <TouchableOpacity onPress={handleOnFilter} ><Text>Filter</Text></TouchableOpacity>
        <View style={style.search}>
          <TextInput style={style.searchtxt}
            value={searchData}
            placeholder={'Type Something'}
            onChangeText={(text) => searchFilter(text)}
          />
        </View>
      </View>
    );
  };



  const Body = () => {
    return (
      <View style={style.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={responseData}
            renderItem={({ item }) => (

              <TouchableOpacity onPress={handleOnClick}>
                <View style={style.body}>
                  <View style={style.iconconatiner}>
                    <Ionicons name="person" size={45} />
                  </View>
                  <View style={style.txtcontainer}>
                    <Text style={style.heading}>
                      {item.fName + " " + item.lName}
                    </Text>
                    <Text style={style.txt}>{item.patientID}</Text>
                    <Text style={style.txt}>UHID:{item.uniqueHID}</Text>
                    <Text style={style.txt}>Dr.ID{item.doctorID}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  };

  return (
    <View style={style.maincontainer}>
      <View style={style.container}>
        <SearchBar />
        <Body />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  maincontainer: {
    height: "100%",
    width: "100%",
    justifycontent: "center",
    alignItems: "center",
    backgroundColor: "#ebedfa",
    padding: 10,
  },
  search: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // borderWidth: 1,
    // padding: 3,
    borderRadius: 30,
    backgroundColor: "white",
  },
  searchtxt: {
    height: 30,
    width: '100%',
    backgroundColor: 'white',
    // borderWidth: 1,
    borderRadius: 10,
    padding: 7,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10

  },

  container: {
    height: "100%",
    width: "100%",
    padding: 5,
  },
  subcontainer: {
    backgroundColor: "white",
    margin: 5,
    justifycontent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
  },
  txtcontainer: {
    marginLeft: 20,
  },
  dateAndGender: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  gender: {
    flexDirection: "row",
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
});

export default SearchForPatient;