import { useEffect, useState } from "react";
import { MoviesApi } from "../../lib/axios";

import { Dimensions, View, Image, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header/Header";
import { BackgroundDefault, TitleLogin, ScrollHome } from "../../styles/kitUi";

import Carousel, { Pagination } from "react-native-snap-carousel";
import { AreaSubtitle, AreaSubtitleGenres, AreaWelcome, GenresCarouselArea, Movie, MoviesCarouselArea, Separator, SubTitle, TitleWelcome } from "./styled";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);


  async function loadMovies(): Promise<void> {
    try {
      const res = await MoviesApi.get("?s=All&apikey=d5e4507a");
      const filteredMovies = res.data.Search.filter(
        (movie: Movie) => movie.Poster !== "N/A"
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
        <MoviesCarouselArea
            horizontal={true}
        >
            {movies.map((movie: Movie) => {
            if (movie.Poster !== "N/A") {
                return (
                <TouchableOpacity
                    key={movie.imdbID}
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
        <Separator/>
        <AreaSubtitle>
            <SubTitle>Only at CineFlow</SubTitle>
        </AreaSubtitle>
        <MoviesCarouselArea
            horizontal={true}
        >
            {movies.map((movie: Movie) => {
            if (movie.Poster !== "N/A") {
                return (
                <TouchableOpacity
                    key={movie.imdbID}
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
        <GenresCarouselArea
            horizontal={true}
        >
            <Image source={require('../../assets/adventure.png')}/>
            <Image source={require('../../assets/fight.png')}/>
            <Image source={require('../../assets/policial.png')}/>
            <Image source={require('../../assets/romantic.png')}/>
        </GenresCarouselArea>
        <AreaSubtitle>
            <SubTitle>Critically acclaimed</SubTitle>
        </AreaSubtitle>
        <MoviesCarouselArea
            horizontal={true}
        >
            {movies.map((movie: Movie) => {
            if (movie.Poster !== "N/A") {
                return (
                <TouchableOpacity
                    key={movie.imdbID}
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
        <Separator/>
        <AreaSubtitle>
            <SubTitle>Only for you</SubTitle>
        </AreaSubtitle>
        <MoviesCarouselArea
            horizontal={true}
        >
            {movies.map((movie: Movie) => {
            if (movie.Poster !== "N/A") {
                return (
                <TouchableOpacity
                    key={movie.imdbID}
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
        <Separator/>
        <AreaSubtitle>
            <SubTitle>News</SubTitle>
        </AreaSubtitle>
        <MoviesCarouselArea
            horizontal={true}
        >
            {movies.map((movie: Movie) => {
            if (movie.Poster !== "N/A") {
                return (
                <TouchableOpacity
                    key={movie.imdbID}
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
