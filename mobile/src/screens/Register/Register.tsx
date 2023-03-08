import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  AreaLogo,
  BackgroundRegistration,
  BtnLoginSubmit,
  ButtonSignUpOutlined,
  InputsArea,
  LabelLogin,
  LabelSignUpOutlined,
  LoginInputs,
  TitleLogin,
} from "../../styles/kitUi";

import { useNavigation } from "@react-navigation/native";
import { AreaBackToLogin, AreaFormRegister } from "./styled";

export function Register() {
  const { navigate } = useNavigation();

  const styles = StyleSheet.create({
    placeholder: {
      paddingLeft: 20,
    },
  });

  return (
    <BackgroundRegistration>
      <SafeAreaView style={{ flex: 1 }}>
        <AreaLogo>
          <Image source={require("../../assets/logo.png")} />
        </AreaLogo>
        <InputsArea>
          <AreaFormRegister>
            <TitleLogin>Create your account</TitleLogin>
            <LoginInputs
              style={styles.placeholder}
              placeholderTextColor="#7C7C8A"
              placeholder="Username"
            />
            <LoginInputs
              style={styles.placeholder}
              placeholderTextColor="#7C7C8A"
              placeholder="E-mail"
            />
            <LoginInputs
              style={styles.placeholder}
              placeholderTextColor="#7C7C8A"
              placeholder="Password"
            />
            <LoginInputs
              style={styles.placeholder}
              placeholderTextColor="#7C7C8A"
              placeholder="Confirm Password"
            />
            <BtnLoginSubmit>
              <LabelLogin>Create and Sign in</LabelLogin>
            </BtnLoginSubmit>
          </AreaFormRegister>
          <AreaBackToLogin>
            <ButtonSignUpOutlined onPress={() => navigate("login")}>
              <LabelSignUpOutlined>Back to login</LabelSignUpOutlined>
            </ButtonSignUpOutlined>
          </AreaBackToLogin>
        </InputsArea>
      </SafeAreaView>
    </BackgroundRegistration>
  );
}
