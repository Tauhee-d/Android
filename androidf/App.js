import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import PateintDetail from "./components/Screens/InPatient/PateintDetail";
import ReasonInPatient from "./components/MakeInPatient/ReasonInPatient";
import Successfull from "./components/MakeInPatient/Sucessfull";
import BillPayment from "./components/MakePayment/BillPayment";
import PaymentSucessfull from "./components/MakePayment/PaymentSucessfull";
import Dashboard from "./components/Dashboard";
import PateintType from "./components/Screens/AddPatient/Patient";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PatientDetails from "./components/Screens/AddPatient/PatientDetails";
import SucessAdding from "./components/Screens/AddPatient/Sucess";
import SearchForPatient from "./components/Screens/InPatient/SearchForPatient";
import Sucessfull from "./components/MakeInPatient/Sucessfull";
import ReasonDischarge from "./components/DischargePatient/ReasonDischarge";
import SucessfullDischarge from "./components/DischargePatient/SucessfullDischarge";

import { useState, useEffect } from "react";
import Temp from "./components/Screens/AddPatient/temp";
import Shoptab from "./components/Shoptab";
import SplashScreen from "./components/Screens/SplashScreen";
import Alert from "./components/Common/Alert/Alert";
import AddPatient1 from "./components/Screens/AddPatient/AddPatient1";
import AddPatient2 from "./components/Screens/AddPatient/AddPatient2";
import AddPatient3 from "./components/Screens/AddPatient/AddPatient3";
import SucessFull from "./components/Screens/AddPatient/SucessFull";
import AddPaymentDetails from "./components/Screens/AddPatient/AddPaymentDetails";
import PaymentFinished from "./components/Screens/Payment/PaymentFinished";
import PaidBy from "./components/Screens/Payment/PaidBy";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "react-navigation-stack";
import { color } from "react-native-reanimated";
import { Button } from "react-native-paper";
import Filter from "./components/Screens/InPatient/Filter";
import OutPatientDetails from "./components/Screens/InPatient/InPatientDetail";
import Symptoms from "./components/Screens/InPatient/Symptoms";
import Treatment from "./components/Screens/InPatient/Treatment";
import TreatmentAdded from "./components/Screens/InPatient/TreatmentAdded";
import OutPatient from "./components/Screens/OutPatient/OutPatient";
import PatientDetail from "./components/Screens/OutPatient/PatientDetail";
import InPatientAddmission from "./components/Screens/OutPatient/InPatientAdmission";
import PatientAddedSucess from "./components/Screens/OutPatient/PatientAddedSucess";
import MedicalRecords from "./components/Screens/MedicalRecords/MedicalRecords";
import MedicalPatientDetails from "./components/Screens/MedicalRecords/PatientDetails";
import Discharge from "./components/Screens/InPatient/Discharge";
import DischargeSuccessFull from "./components/Screens/InPatient/DischargeSuccessFull";
import Payment from "./components/Screens/Payment/Payment";
import PaymentDetails from "./components/Screens/Payment/PaymentDetails";
import InPatientPaymentDetails from "./components/Screens/InPatient/InPatientPayment";
import InPatientPaidBy from "./components/Screens/InPatient/InPatientPaidBy";
import InPatientPaySuccessfull from "./components/Screens/InPatient/InPatientPaySuccessfull";

const Stack = createNativeStackNavigator();
export default function App() {
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Alert />
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* <Stack.Navigator initialRouteName="HomeScreen"> */}
        {showScreen ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : null}
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SigninScreen" component={Signin} />
        <Stack.Screen name="SignupScreen" component={Signup} />
        <Stack.Screen
          name="Shoptab"
          component={Shoptab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add Patient"
          component={PateintType}
          options={{ headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="Patient Detail"
          component={AddPatient1}
          options={{ headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="Personal Detail"
          component={AddPatient2}
          options={{ headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="Medical Records"
          component={AddPatient3}
          options={{ headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="Add Pateint SucessFull"
          component={SucessFull}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Add Payment Detail"
          component={AddPaymentDetails}
          options={{ headerBackTitleVisible: false }}
        /> */}
        {/* <Stack.Screen
          name="Pay By"
          component={PaidBy}
          options={{ headerBackTitleVisible: false }}
        /> */}
        {/* <Stack.Screen
          name="Payment Finished"
          component={PaymentFinished}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen name="Sucessfull" component={SucessAdding} /> */}
        <Stack.Screen
          name="Search For Patient"
          component={SearchForPatient}
          options={{
            headerTitle: "Inpatient List",
            headerBackTitleVisible: false,
            headerRight: () => {
              return (
                <Button
                  onPress={() => console.log("This is a button!")}
                  title="Info"
                  color="#fff"
                />
              );
            },
          }}
        />

        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{
            headerTitle: "Inpatient List",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="OutPatientDetails"
          component={OutPatientDetails}
          options={{
            headerTitle: "Patient Details",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen name="Symptoms" component={Symptoms} />
        <Stack.Screen name="Treatments" component={Treatment} />
        <Stack.Screen
          name="TreatmentAdded"
          component={TreatmentAdded}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InPatientDischarge"
          component={Discharge}
          options={{
            headerTitle: "Discharge",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="InPatientDischargeSuccessFull"
          component={DischargeSuccessFull}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="OutPatient" component={OutPatient} />
        <Stack.Screen
          name="PatientDetail"
          component={PatientDetail}
          options={{
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name="InPatientAdmission"
          component={InPatientAddmission}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InPatientPayment"
          component={InPatientPaymentDetails}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="InPatientPaidBy"
          component={InPatientPaidBy}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="InPatientPaySuccessfull"
          component={InPatientPaySuccessfull}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="PatientAddedSucessfully"
          component={PatientAddedSucess}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MedicalRecords"
          component={MedicalRecords}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="MedicalPatientRecord"
          component={MedicalPatientDetails}
          options={{
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Sucessfull Discharge"
          component={SucessfullDischarge}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerTitle: "Payment",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="PaymentDetail"
          component={PaymentDetails}
          options={{
            headerTitle: "Payment Details",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="PayBy"
          component={PaidBy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment Finished"
          component={PaymentFinished}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
