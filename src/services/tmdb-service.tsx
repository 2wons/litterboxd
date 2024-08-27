import { PaginatedResponse, FilmDetail } from "./schema";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p";
const BASE_URL = "https://api.themoviedb.org";
const TOKEN = import.meta.env.VITE_TMDB_API_KEY;

export const image = (link: string) => {
  return `${IMG_BASE_URL}/w300/${link}`;
};

export const tmdb = async <T,>(endpoint: string): Promise<T | never> => {
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
    throw new Error(`Error: ${error}`);
  }
};

export const getPopularFilms = async ({ page = "1" }: { page?: string }) => {
  return await tmdb<PaginatedResponse>(
    `/movie/popular?languages=en_US&page=${page}`
  );
};

export const getFilm = async (film_id: string) => {
  return await tmdb<FilmDetail>(
    `/movie/${film_id}?language=en-US&append_to_response=credits`
  );
};
