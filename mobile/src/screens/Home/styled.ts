import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const MoviesCarouselArea = styled(ScrollView)``;

export const Movie = styled.Image`
  margin: 10px;
`;

export const AreaWelcome = styled.View`
  justify-content: flex-end;

  height: 3%;
`;

export const TitleWelcome = styled.Text`
  margin: 10px;
  color: white;
  font-weight: bold;
  font-size: 17px;
`;

export const AreaSubtitle = styled.View`
  margin-top: 10px;
`;

export const SubTitle = styled.Text`
  margin: 10px;
  color: white;
  font-weight: bold;
  font-size: 17px;
`;
export const Separator = styled.View`
  height: 1%;
`;

export const AreaSubtitleGenres = styled(AreaSubtitle)`
  margin-top: 10px;
  height: 3%;
  justify-content: flex-end;
`;

export const GenresCarouselArea = styled(MoviesCarouselArea)`
  height: 10%;
`;
