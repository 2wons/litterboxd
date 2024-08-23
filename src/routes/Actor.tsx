import { Container } from "@/components/container";
import PosterGallery from "@/components/poster-gallery";
import { image, tmdbv2 } from "@/services/tmdb-service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* 
TODO: fix this ugly thing..
 */
type PersonResponse = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  movie_credits: {
    cast: Array<{
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
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
      character: string;
      credit_id: string;
      order: number;
      media_type: string;
    }>;
  };
};

const Actor = () => {
  const [person, setPerson] = useState<PersonResponse>();
  const { actorid } = useParams();

  useEffect(() => {
    (async () => {
      await tmdbv2<PersonResponse>(
        `/person/${actorid}?language=en-US&append_to_response=movie_credits`
      )
        .then((res) => {
          setPerson(res!);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);
  return (
    <Container>
      <div className="sm:grid grid-cols-3 gap-20">
        <div className="col-span-2">
          <p className="text-muted-foreground text-md">Films Starring</p>
          <h1 className="font-bold text-2xl pb-5">{person?.name}</h1>
          <div className="flex border-y-2 border-gray-700 p-1.5 justify-between text-muted-foreground text-sm mb-3">
            <p>Actor</p>
            <div className="inline-flex space-x-2">
              <p>decade</p>
              <p>genre</p>
              <p>service</p>
            </div>
          </div>
          <PosterGallery
            films={person?.movie_credits.cast || []}
            minWidth={150}
          />
        </div>
        <div className="flex sm:flex-col sm:w-full py-8 sm:py-0 space-x-5 sm:space-x-0">
          <img
            src={image(person?.profile_path!)}
            alt="actor_pic"
            className="rounded-lg w-1/3 sm:w-auto object-scale-down"
          />
          <p className="text-muted-foreground text-sm py-2">
            {person?.biography}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Actor;
