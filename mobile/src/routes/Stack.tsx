import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Redirect } from "../components/Redirect";
import { Login } from "../screens/Login/Login";
import { Movie } from "../screens/Movie/Movie";
import { Profiles } from "../screens/Profiles/Profiles";
import { Register } from "../screens/Register/Register";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="login" component={Login} />
        <Screen name="register" component={Register} />
        <Screen name="profiles" component={Profiles} />
        <Screen name="redirect" component={Redirect} />
        <Screen name="movie" component={Movie} />
      </Navigator>
    </NavigationContainer>
  );
}
