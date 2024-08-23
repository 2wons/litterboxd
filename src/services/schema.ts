
/**
 * Represents a paginated response from the TMDB API.
 */
export type PaginatedResponse = {
  /**
   * The current page number of the response.
   */
  page: number;

  /**
   * An array of films returned for the current page.
   */
  results: Film[];

  /**
   * The total number of pages available for the current
   * query.
   */
  total_pages: number;

  /**
   * The total number of results available for the current
   * query.
   */
  total_results: number;
};

/**
 * Represents a credit (cast or crew) in a film or TV show from the TMDB API.
 */
export type Credit = {
  /**
   * Indicates if the person is marked as an adult in the TMDB database.
   */
  adult: boolean;

  /**
   * The gender of the person. Possible values are 0 (not specified), 1 (female), 2 (male).
   */
  gender: number;

  /**
   * The unique identifier for the person.
   */
  id: number;

  /**
   * The department in which the person is primarily known for, e.g., "Acting", "Directing".
   */
  known_for_department: string;

  /**
   * The name of the person.
   */
  name: string;

  /**
   * The original name of the person.
   */
  original_name: string;

  /**
   * The popularity score of the person, as determined by TMDB.
   */
  popularity: number;

  /**
   * The path to the profile image of the person. This can be used to construct the full image URL.
   */
  profile_path: string;

  /**
   * The unique identifier for the cast entry. Available only for cast members.
   */
  cast_id: number;

  /**
   * The name of the character portrayed by the person. Available only for cast members.
   */
  character: string;

  /**
   * The unique identifier for the credit.
   */
  credit_id: string;

  /**
   * The order of appearance in the credits. Available only for cast members.
   */
  order?: number;

  /**
   * The department in which the person worked. Available only for crew members.
   */
  department?: string;

  /**
   * The specific job title of the person within the department. Available only for crew members.
   */
  job?: string;
};

/**
 * Represents a response containing credits for a film or TV show.
 */
export type CreditsResponse = {
  /**
   * The unique identifier for the film or TV show.
   */
  id: number;

  /**
   * An array of cast members for the film or TV show.
   */
  cast: Credit[];

  /**
   * An array of crew members for the film or TV show.
   */
  crew: Credit[];
};

/**
 * Represents a film from the TMDB API.
 */
export interface Film {
  /**
   * Indicates if the film is intended for adult audiences.
   */
  adult: boolean;

  /**
   * The path to the backdrop image of the film. This can be used to construct the full image URL.
   */
  backdrop_path: string;

  /**
   * An array of genre IDs associated with the film.
   */
  genre_ids: number[];

  /**
   * The unique identifier for the film.
   */
  id: number;

  /**
   * The original language of the film.
   */
  original_language: string;

  /**
   * The original title of the film.
   */
  original_title: string;

  /**
   * An overview or summary of the film.
   */
  overview: string;

  /**
   * The popularity score of the film, as determined by TMDB.
   */
  popularity: number;

  /**
   * The path to the poster image of the film. This can be used to construct the full image URL.
   */
  poster_path: string;

  /**
   * The release date of the film.
   */
  release_date: string;

  /**
   * The title of the film.
   */
  title: string;

  /**
   * Indicates if the film has a video available.
   */
  video: boolean;

  /**
   * The average rating of the film.
   */
  vote_average: number;

  /**
   * The number of votes the film has received.
   */
  vote_count: number;
}

/**
 * Represents a genre associated with a film.
 */
interface Genre {
  /**
   * The unique identifier for the genre.
   */
  id: number;

  /**
   * The name of the genre.
   */
  name: string;
}

/**
 * Represents a production company involved in the production of a film.
 */
interface ProductionCompany {
  /**
   * The unique identifier for the production company.
   */
  id: number;

  /**
   * The path to the logo image of the production company. This can be used to construct the full image URL.
   */
  logo_path: string | null;

  /**
   * The name of the production company.
   */
  name: string;

  /**
   * The country of origin for the production company.
   */
  origin_country: string;
}

/**
 * Represents a production country associated with a film.
 */
interface ProductionCountry {
  /**
   * The ISO 3166-1 code for the production country.
   */
  iso_3166_1: string;

  /**
   * The name of the production country.
   */
  name: string;
}

/**
 * Represents a spoken language associated with a film.
 */
interface SpokenLanguage {
  /**
   * The English name of the spoken language.
   */
  english_name: string;

  /**
   * The ISO 639-1 code for the spoken language.
   */
  iso_639_1: string;

  /**
   * The name of the spoken language.
   */
  name: string;
}

/**
 * Represents detailed information about a film.
 */
export interface FilmDetail {
  /**
   * Indicates if the film is intended for adult audiences.
   */
  adult: boolean;

  /**
   * The path to the backdrop image of the film. This can be used to construct the full image URL.
   */
  backdrop_path: string | null;

  /**
   * The collection that the film belongs to, if any.
   */
  belongs_to_collection: null | any;

  /**
   * The budget of the film.
   */
  budget: number;

  /**
   * An array of genres associated with the film.
   */
  genres: Genre[];

  /**
   * The homepage of the film.
   */
  homepage: string;

  /**
   * The unique identifier for the film.
   */
  id: number;

  /**
   * The IMDb identifier for the film, if available.
   */
  imdb_id: string | null;

  /**
   * The countries of origin for the film.
   */
  origin_country: string[];

  /**
   * The original language of the film.
   */
  original_language: string;

  /**
   * The original title of the film.
   */
  original_title: string;

  /**
   * An overview or summary of the film.
   */
  overview: string;

  /**
   * The popularity score of the film, as determined by TMDB.
   */
  popularity: number;

  /**
   * The path to the poster image of the film. This can be used to construct the full image URL.
   */
  poster_path: string | null;

  /**
   * An array of production companies involved in the film.
   */
  production_companies: ProductionCompany[];

  /**
   * An array of production countries associated with the film.
   */
  production_countries: ProductionCountry[];

  /**
   * The release date of the film.
   */
  release_date: string;

  /**
   * The revenue generated by the film.
   */
  revenue: number;

  /**
   * The runtime of the film, in minutes.
   */
  runtime: number | null;

  /**
   * An array of spoken languages associated with the film.
   */
  spoken_languages: SpokenLanguage[];

  /**
   * The status of the film.
   */
  status: string;

  /**
   * The tagline of the film, if available.
   */
  tagline: string | null;

  /**
   * The title of the film.
   */
  title: string;

  /**
   * Indicates if the film has a video available.
   */
  video: boolean;

  /**
   * The average rating of the film.
   */
  vote_average: number;

  /**
   * The number of votes the film has received.
   */
  vote_count: number;

  /**
   * The credits for the film, including cast and crew members.
   */
  credits: {
    /**
     * An array of cast members for the film.
     */
    cast: Credit[];

    /**
     * An array of crew members for the film.
     */
    crew: Credit[];
  };
}

/**
 * Represents the movie credits for a person.
 */
type MovieCredits = {
  /**
   * An array of cast members in the movies.
   */
  cast: Array<{
    /**
     * Indicates if the cast member is intended for adult audiences.
     */
    adult: boolean;

    /**
     * The path to the backdrop image of the movie. This can be used to construct the full image URL.
     */
    backdrop_path: string;

    /**
     * An array of genre IDs associated with the movie.
     */
    genre_ids: number[];

    /**
     * The unique identifier for the movie.
     */
    id: number;

    /**
     * The original language of the movie.
     */
    original_language: string;

    /**
     * The original title of the movie.
     */
    original_title: string;

    /**
     * An overview or summary of the movie.
     */
    overview: string;

    /**
     * The popularity score of the movie, as determined by TMDB.
     */
    popularity: number;

    /**
     * The path to the poster image of the movie. This can be used to construct the full image URL.
     */
    poster_path: string;

    /**
     * The release date of the movie.
     */
    release_date: string;

    /**
     * The title of the movie.
     */
    title: string;

    /**
     * Indicates if the movie has a video available.
     */
    video: boolean;

    /**
     * The average rating of the movie.
     */
    vote_average: number;

    /**
     * The number of votes the movie has received.
     */
    vote_count: number;

    /**
     * The character portrayed by the cast member.
     */
    character: string;

    /**
     * The unique identifier for the credit.
     */
    credit_id: string;

    /**
     * The order of appearance in the credits.
     */
    order: number;

    /**
     * The media type of the movie.
     */
    media_type: string;
  }>;
};

/**
 * Represents a response containing information about a person.
 */
export type PersonResponse = {
  /**
   * Indicates if the person is marked as an adult in the TMDB database.
   */
  adult: boolean;

  /**
   * An array of alternative names for the person.
   */
  also_known_as: string[];

  /**
   * The biography of the person.
   */
  biography: string;

  /**
   * The birthday of the person.
   */
  birthday: string;

  /**
   * The death day of the person, if applicable.
   */
  deathday: string | null;

  /**
   * The gender of the person. Possible values are 0 (not specified), 1 (female), 2 (male).
   */
  gender: number;

  /**
   * The homepage of the person, if available.
   */
  homepage: string | null;

  /**
   * The unique identifier for the person.
   */
  id: number;

  /**
   * The IMDb identifier for the person.
   */
  imdb_id: string;

  /**
   * The department in which the person is primarily known for, e.g., "Acting", "Directing".
   */
  known_for_department: string;

  /**
   * The name of the person.
   */
  name: string;

  /**
   * The place of birth of the person.
   */
  place_of_birth: string;

  /**
   * The popularity score of the person, as determined by TMDB.
   */
  popularity: number;

  /**
   * The path to the profile image of the person. This can be used to construct the full image URL.
   */
  profile_path: string;

  /**
   * The movie credits for the person.
   */
  movie_credits: MovieCredits;
};
