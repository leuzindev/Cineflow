import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  AreaForm,
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

import { TitleSignUp, AreaSignUp } from "./styled";

import { useNavigation } from "@react-navigation/native";

export function Login() {
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
          <AreaForm>
            <TitleLogin>Access your account</TitleLogin>

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
            <BtnLoginSubmit onPress={() => navigate("profiles")}>
              <LabelLogin>Sign in</LabelLogin>
            </BtnLoginSubmit>
          </AreaForm>
          <AreaSignUp>
            <TitleSignUp>Still don't have access?</TitleSignUp>
            <ButtonSignUpOutlined onPress={() => navigate("register")}>
              <LabelSignUpOutlined>Sign up</LabelSignUpOutlined>
            </ButtonSignUpOutlined>
          </AreaSignUp>
        </InputsArea>
      </SafeAreaView>
    </BackgroundRegistration>
  );
}
