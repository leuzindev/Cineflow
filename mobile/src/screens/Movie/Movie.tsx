import { RouteProp, useRoute } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import { Header } from "../../components/Header/Header";
import { BackgroundDefault } from "../../styles/kitUi";
import {
  AreaDescription,
  AreaImage,
  AreaMovieSelected,
  AreaText,
  ImageMovieSelected,
  LineWatching,
  Play,
  Sub,
  SubArea,
  TitleOfMovie,
} from "./styled";

import { IMovie } from "../Home/Home";

interface MovieRouteParams {
  movie: IMovie;
}

export function Movie() {
  const route = useRoute<RouteProp<Record<string, MovieRouteParams>, string>>();

  const { movie } = route.params;

  return (
    <BackgroundDefault>
      <Header />
      <AreaMovieSelected>
        <ImageMovieSelected
          source={{ uri: movie.Poster }}
          style={{ width: 300, height: 450 }}
        />
        <SubArea>
          <Sub>{movie.Year}</Sub>
        </SubArea>
        <LineWatching source={require("../../assets/time.png")} />
      </AreaMovieSelected>
      <AreaDescription>
        <AreaImage>
          <Play source={require("../../assets/play.png")} />
        </AreaImage>
        <AreaText>
            <TitleOfMovie>{movie.Title}</TitleOfMovie>
        </AreaText>
      </AreaDescription>
    </BackgroundDefault>
  );
}

