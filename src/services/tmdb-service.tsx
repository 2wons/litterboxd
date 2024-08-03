export const IMG_BASE_URL = "https://image.tmdb.org/t/p";
const BASE_URL = "https://api.themoviedb.org";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGEyZjFlNTgxYTI0NWYxM2NlYmUyMzQ2OTIyOWFlNCIsIm5iZiI6MTcyMjYwMjQwNS44NDc2NzQsInN1YiI6IjY2OWUwZDQ3Mjk2ZDkwYWYwOWE2ZjI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kSd47mAfxgXSAOpqr44JXWN4AawSJqlltpVxCgjhfMk";

/* https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg */

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
    console.log(json);
    return json;
  } catch (error: any) {
    console.log(error.message);
  }
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
