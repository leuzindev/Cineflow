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
import { useState } from "react";
import { LoginApi } from "../../lib/axios";

export function Login() {
  const { navigate } = useNavigation();

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState('');



  const login = async () => {
    try{
      const res = await LoginApi.post('login/', {
        username: name,
        password: password,
      });
      const token = res.data.access
      console.log(name);
      console.log(password);
      console.log(token);
      return token;

    }catch (error) {
      
      console.error(error);
    }

   

  }




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
              placeholder="Username"
              onChangeText={(value) => setName(value)}
            />
            <LoginInputs
              style={styles.placeholder}
              placeholderTextColor="#7C7C8A"
              placeholder="Password"
              onChangeText={(value) => setPassword(value)}
            />
            <BtnLoginSubmit onPress={login}>
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
