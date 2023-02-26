import  { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Header } from "../../components/Header/Header";
import { MoviesApi } from "../../lib/axios";
import { BackgroundDefault, TitleLogin, ScrollHome } from "../../styles/kitUi";

import Carousel from "react-native-snap-carousel";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  async function loadMovies(): Promise<Movie[]> {
    try {
      const res = await MoviesApi.get("?s=Spiderman&apikey=d5e4507a");
        setMovies(res.data.Search);
      return res.data.Search;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    loadMovies();
  });

  return (
    <BackgroundDefault>
      <Header />
      <ScrollHome>
        <TitleLogin>Home-page</TitleLogin>




        {/* {movies.map((movie: Movie) => {
          if (movie.Poster !== "N/A") {
            return (
              <TouchableOpacity
                key={movie.imdbID}
              >
                <Image
                 
                  source={{ uri: movie.Poster }}
                  style={{ width: 200, height: 300 }}
                />
              </TouchableOpacity>
            );
          }
        })} */}
      </ScrollHome>
    </BackgroundDefault>
  );
}
