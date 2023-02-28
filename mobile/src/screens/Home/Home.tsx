import { useEffect, useState } from "react";
import { MoviesApi } from "../../lib/axios";

import { Image, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header/Header";
import { BackgroundDefault, TitleLogin, ScrollHome } from "../../styles/kitUi";
import { useNavigation } from "@react-navigation/native";

import {
  AreaSubtitle,
  AreaSubtitleGenres,
  AreaWelcome,
  GenresCarouselArea,
  Movie,
  MoviesCarouselArea,
  Separator,
  SubTitle,
  TitleWelcome,
} from "./styled";

export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export function Home() {

  const { navigate } = useNavigation();

  const [movies, setMovies] = useState<IMovie[]>([]);

  async function loadMovies(): Promise<void> {
    try {
      const res = await MoviesApi.get("?s=Spider man&apikey=d5e4507a");
      const filteredMovies = res.data.Search.filter(
        (movie: IMovie) => movie.Poster !== "N/A"
      );
      setMovies(filteredMovies);
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <BackgroundDefault>
      <Header />
      <ScrollHome>
        <AreaWelcome>
          <TitleWelcome>Welcome, Leonardo</TitleWelcome>
        </AreaWelcome>

        <AreaSubtitle>
          <SubTitle>Discover</SubTitle>
        </AreaSubtitle>
        <MoviesCarouselArea horizontal={true}>
          {movies.map((movie: IMovie) => {
            if (movie.Poster !== "N/A") {
              return (
                <TouchableOpacity 
                  key={movie.imdbID}
                  onPress={() => navigate("movie", { movie })}
                >
                  <Movie
                    source={{ uri: movie.Poster }}
                    style={{ width: 200, height: 300 }}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </MoviesCarouselArea>
        <Separator />
        <AreaSubtitle>
          <SubTitle>Only at CineFlow</SubTitle>
        </AreaSubtitle>
        <MoviesCarouselArea horizontal={true}>
          {movies.map((movie: IMovie) => {
            if (movie.Poster !== "N/A") {
              return (
                <TouchableOpacity 
                  key={movie.imdbID}
                  onPress={() => navigate("movie", { movie })}
                >
                  <Movie
                    source={{ uri: movie.Poster }}
                    style={{ width: 200, height: 300 }}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </MoviesCarouselArea>

        <AreaSubtitleGenres>
          <SubTitle>Genres</SubTitle>
        </AreaSubtitleGenres>
        <GenresCarouselArea horizontal={true}>
          <Image source={require("../../assets/adventure.png")} />
          <Image source={require("../../assets/fight.png")} />
          <Image source={require("../../assets/policial.png")} />
          <Image source={require("../../assets/romantic.png")} />
        </GenresCarouselArea>
        <AreaSubtitle>
          <SubTitle>Critically acclaimed</SubTitle>
        </AreaSubtitle>
        <MoviesCarouselArea horizontal={true}>
          {movies.map((movie: IMovie) => {
            if (movie.Poster !== "N/A") {
              return (
                <TouchableOpacity 
                  key={movie.imdbID}
                  onPress={() => navigate("movie", { movie })}
                >
                  <Movie
                    source={{ uri: movie.Poster }}
                    style={{ width: 200, height: 300 }}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </MoviesCarouselArea>
        <Separator />
        <AreaSubtitle>
          <SubTitle>Only for you</SubTitle>
        </AreaSubtitle>
        <MoviesCarouselArea horizontal={true}>
          {movies.map((movie: IMovie) => {
            if (movie.Poster !== "N/A") {
              return (
                <TouchableOpacity 
                  key={movie.imdbID}
                  onPress={() => navigate("movie", { movie })}
                >
                  <Movie
                    source={{ uri: movie.Poster }}
                    style={{ width: 200, height: 300 }}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </MoviesCarouselArea>
        <Separator />
        <AreaSubtitle>
          <SubTitle>News</SubTitle>
        </AreaSubtitle>
        <MoviesCarouselArea horizontal={true}>
          {movies.map((movie: IMovie) => {
            if (movie.Poster !== "N/A") {
              return (
                <TouchableOpacity 
                  key={movie.imdbID}
                  onPress={() => navigate("movie", { movie })}
                >
                  <Movie
                    source={{ uri: movie.Poster }}
                    style={{ width: 200, height: 300 }}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </MoviesCarouselArea>
      </ScrollHome>
    </BackgroundDefault>
  );
}
