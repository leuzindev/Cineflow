import { ScrollView } from "react-native";
import styled from "styled-components/native";


export const BackgroundRegistration = styled.View`
    background-color: #222223;
    flex: 1;
`

export const BackgroundDefault = styled.View`
    flex: 1;
    background-color: #121214;
`

export const AreaLogo = styled.View`
    justify-content: center;
    align-items: center;
    height: 25%;
    width: 100%;
`

export const TitleLogin = styled.Text`
    color: white;
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 20px;
`

export const AreaForm = styled.View`
    width: 100%;
    height: 60%;
    justify-content: flex-end;
    align-items: center;
`

export const InputsArea = styled.View`
    align-items: center;
    justify-content: center;
    height: 75%;
`

export const LoginInputs = styled.TextInput`
    background-color: #121214;
    margin-bottom: 15px;
    color: white;
    height: 56px;
    width: 85%;
    border-radius: 6px;
`

export const BtnLoginSubmit = styled.TouchableOpacity`
    margin-top: 20px;
    height: 56px;
    width: 85%;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 6px;
`

export const LabelLogin = styled.Text`
    font-weight: bold;
    font-size: 16px;

`
export const ButtonSignUpOutlined = styled.TouchableOpacity`
    border: 1px solid white;
    height: 56px;
    width: 85%;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`

export const LabelSignUpOutlined = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
`

export const ScrollHome = styled(ScrollView)`
    

`