import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

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
import { LoginApi } from "../../lib/axios";
import Cookies from "js-cookie";

export function Register() {
  const styles = StyleSheet.create({
    placeholder: {
      paddingLeft: 20,
    },
  });

  const { navigate } = useNavigation();
  
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');


  
  const register = async () => {
    try{
      const res = await LoginApi.post('register/', {
        username: name,
        email: email,
        password: password,
        password2: password2,
      });

      
      if (res.status === 201) {
        console.log('Registration successful');
        const resLogin = await LoginApi.post("login/",{
          username: name,
          password: password,
        })
        if(resLogin.status === 200){
          const token = res.data.access
          Cookies.set('access_token', token, { expires: 7 });
          navigate("profiles")
        }
      
        
      } else {
        console.log('Registration failed');
      }

      
    }catch (error) {
      console.error(error);
    }
  }



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
              onChangeText={(value) => setName(value)}
            />
            <LoginInputs
              style={styles.placeholder}
              placeholderTextColor="#7C7C8A"
              placeholder="E-mail"
              onChangeText={(value) => setEmail(value)}
            />
            <LoginInputs
              style={styles.placeholder}
              placeholderTextColor="#7C7C8A"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
            <LoginInputs
              style={styles.placeholder}
              placeholderTextColor="#7C7C8A"
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={(value) => setPassword2(value)}
            />
            <BtnLoginSubmit
              onPress={register}
            >
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
