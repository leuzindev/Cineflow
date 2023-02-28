import { useState, useEffect } from "react";
import { TouchableOpacity, TextInput } from "react-native";
import { HeaderSearch } from "../../components/HeaderSearch/HeaderSearch";
import { MoviesApi } from "../../lib/axios";
import { BackgroundDefault } from "../../styles/kitUi";
import { Movie } from "../Home/styled";
import {
  AreaMovies,
  AreaTotalSearch,
  SpaceForSearch,
  TitleSearch,
} from "./styled";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export function Search() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchMovie, setSearchMovie] = useState("");

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
      <HeaderSearch />
      <SpaceForSearch />
      <AreaTotalSearch>
        <TitleSearch>You are looking for ...</TitleSearch>
        <AreaMovies horizontal={true}>
          {movies.map((movie: Movie) => {
            if (movie.Poster !== "N/A") {
              return (
                <TouchableOpacity key={movie.imdbID}>
                  <Movie
                    source={{ uri: movie.Poster }}
                    style={{ width: 200, height: 300 }}
                  />
                </TouchableOpacity>
              );
            }
          })}
        </AreaMovies>
      </AreaTotalSearch>
    </BackgroundDefault>
  );
}
