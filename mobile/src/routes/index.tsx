import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Register } from "../screens/Register";


const { Screen, Navigator } = createNativeStackNavigator();


export function Routes() {
  return (
  
      <NavigationContainer>
        <Navigator initialRouteName="login">
          <Screen name="login" component={Login} />
          <Screen name="register" component={Register} />
        </Navigator>
      </NavigationContainer>
 
  );
}
