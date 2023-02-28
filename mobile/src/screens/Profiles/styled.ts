import styled from "styled-components/native";
import { Image } from "react-native";
import { ButtonSignUpOutlined, LabelSignUpOutlined } from "../../styles/kitUi";

export const AreaIcon = styled.View`
  height: 15%;
  justify-content: flex-end;
  align-items: center;
`;
export const TitleWatching = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 20px;
`;

export const AreaTitle = styled.View`
  height: 15%;
  justify-content: flex-end;
  align-items: center;
`;

export const ProfileArea = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 55%;
  width: 80%;
`;

export const AvatarRedirect = styled.TouchableOpacity`
  align-items: center;
`;

export const ProfileCompleted = styled.View`
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ProfileName = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 10px;
`;

export const FirstProfiles = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const SecondProfiles = styled.View`
  flex-direction: row;
`;

export const AvatarIcon = styled(Image)``;

export const AreaNewProfile = styled.View`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 25%;
`;

export const ButtonNewProfileOutlined = styled(ButtonSignUpOutlined)`
  width: 65%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LabelNewProfile = styled(LabelSignUpOutlined)`
  margin-right: 10px;
`;
