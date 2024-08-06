export const IMG_BASE_URL = "https://image.tmdb.org/t/p";
const BASE_URL = "https://api.themoviedb.org";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGEyZjFlNTgxYTI0NWYxM2NlYmUyMzQ2OTIyOWFlNCIsIm5iZiI6MTcyMjYwMjQwNS44NDc2NzQsInN1YiI6IjY2OWUwZDQ3Mjk2ZDkwYWYwOWE2ZjI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kSd47mAfxgXSAOpqr44JXWN4AawSJqlltpVxCgjhfMk";

/* https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg */

// TODO: image link builder

export const getPopularFilms = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/popular?languages=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getFilm = async (film_id: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${film_id}?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Response Status ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    return json;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getImages = async (film_id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/3/movie/${film_id}/images`, {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Response Status ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error: any) {
    console.log(error.message);
  }
};

type ImageQuery = {
  aspect_ration: string;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type ImageResponse = {
  backdrops: Array<ImageQuery>;
  poster: Array<ImageQuery>;
};

export interface Film {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface FilmDetail {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
