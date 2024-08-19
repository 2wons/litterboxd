export const IMG_BASE_URL = "https://image.tmdb.org/t/p";
const BASE_URL = "https://api.themoviedb.org";
const TOKEN = import.meta.env.VITE_TMDB_API_KEY;

export const image = (link: string) => {
  return `${IMG_BASE_URL}/w300/${link}`;
};

export const tmdb = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}/3${endpoint}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const tmdbv2 = async <T,>(endpoint: string): Promise<T | void> => {
  try {
    const response = await fetch(`${BASE_URL}/3${endpoint}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularFilms = async ({ page = "1" }: { page?: string }) => {
  return await tmdb(`/movie/popular?languages=en_US&page=${page}`);
};

export const getFilm = async (film_id: string) => {
  return await tmdbv2<FilmDetail>(
    `/movie/${film_id}?language=en-US&append_to_response=credits`
  );
};

export type Credit = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
};

export type CreditsResponse = {
  id: number;
  cast: Credit[];
  crew: Credit[];
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
  credits: {
    cast: Credit[];
    crew: Credit[];
  };
}
