import styled from "styled-components/native";
import { Image, ScrollView } from "react-native";
import { BtnLoginSubmit, LoginInputs } from "../../styles/kitUi";

export const AreaPhoto = styled.View`
  align-items: center;
  justify-content: center;
  height: 25%;
`;

export const PhotoAvatar = styled(Image)`
  object-fit: contain;
  width: 100px;
  height: 100px;
`;

export const LabelChange = styled.Text`
  margin: 14px;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export const AreaFormData = styled.View`
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const InputData = styled(LoginInputs)`
  background-color: #202024;
`;

export const InputDataOff = styled(LoginInputs)`
  background-color: #202024;
  opacity: 0.5;
`;

export const AreaChangePassword = styled.View`
  height: 30%;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const InputChange = styled(LoginInputs)`
  background-color: #202024;
`;

export const ChangeTitle = styled.Text`
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

export const AreaTitleChange = styled.View`
  width: 85%;
`;

export const UpdateBtn = styled(BtnLoginSubmit)``;
