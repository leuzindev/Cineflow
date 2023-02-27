import styled from "styled-components/native";
import { Image, ScrollView } from "react-native";
import { LoginInputs } from "../../styles/kitUi";

export const ScrollProfile = styled(ScrollView)`

       
  
`

export const AreaPhoto = styled.View`

    align-items: center;
    justify-content: center;
    height: 40%;
`


export const PhotoAvatar = styled(Image)`
    object-fit: contain;
    width: 120px;
    height:120px
`

export const LabelChange = styled.Text`
    margin: 14px;
    color: white;
    font-weight: bold;
    font-size: 16px;
`

export const AreaFormData = styled.View`
    align-items: center;
    width: 100%;
    height: 30%;
`

export const InputData = styled(LoginInputs)`
    background-color: #202024;

`

export const InputDataOff = styled(LoginInputs)`
    background-color: #202024;
    opacity: 0.50;

`


export const ChangePassArea = styled.View`

    margin-top: 10px;
    width: 100%;
    height: 170px;
    align-items: center;
    
`
export const ChangeTitle = styled.Text`
    color: white;
    
`

export const InputsChangePassword = styled(LoginInputs)`
    background-color: #202024;
    
    
`
export const AreaTitleChange = styled.View`


   width: 100%;
   margin-left: 30px;
   
`












