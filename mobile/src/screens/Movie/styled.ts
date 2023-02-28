import styled from "styled-components/native";
import { Image } from "react-native";

export const AreaMovieSelected = styled.View`
  height: 65%;
  justify-content: center;
  align-items: center;
`;

export const SubArea = styled.View`
  width: 73%;
`;

export const Sub = styled.Text`
  color: #8f8f8f;
  font-weight: bold;
  margin-top: 5px;
`;

export const AreaDescription = styled.View`
  flex-direction: row;
  height: 40%;
  justify-content: center;
  align-items: center;
`;

export const AreaImage = styled.View`
  align-items: flex-end;
  height: 100%;
  width: 25%;
`;

export const AreaText = styled.View`
  width: 70%;
  height: 93%;
`;

export const ImageMovieSelected = styled(Image)`
  border-radius: 7px;
`;

export const LineWatching = styled(Image)`
  margin-top: 10px;
`;
export const Play = styled(Image)`
  margin-right: 10px;
`;
export const TitleOfMovie = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
`;
