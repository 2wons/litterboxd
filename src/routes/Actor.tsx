import { Container } from "@/components/container";
import PosterGallery from "@/components/poster-gallery";
import { PersonResponse } from "@/services/schema";
import { image, tmdb } from "@/services/tmdb-service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Actor = () => {
  const [person, setPerson] = useState<PersonResponse>();
  const [showMore, setShowMore] = useState(false);
  const { actorid } = useParams();

  useEffect(() => {
    (async () => {
      await tmdb<PersonResponse>(
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
    <Container title={person?.name || ""}>
      <div className="md:grid grid-cols-3 gap-10">
        <section className="col-span-2">
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
        </section>
        <section className="flex md:flex-col md:w-full py-8 md:py-0 space-x-5 md:space-x-0 items-start">
          <img
            src={image(person?.profile_path!)}
            alt="actor_pic"
            className="rounded-lg w-1/3 md:w-auto object-scale-down"
          />
          <article>
            <p
              className={`text-muted-foreground text-sm md:pt-2 ${
                !showMore && "line-clamp-5"
              }`}
            >
              {person?.biography}
            </p>
            <span>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-sky-500"
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            </span>
          </article>
        </section>
      </div>
    </Container>
  );
};

export default Actor;
