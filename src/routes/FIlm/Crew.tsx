import TagRow from "@/components/tag-row";
import { CreditsResponse, tmdbv2 } from "@/services/tmdb-service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Crew = () => {
  const [crew, setCrew] = useState<Record<string, string[]>>({});
  const { filmid } = useParams();

  const groupCrewByRoles = (credits: CreditsResponse) => {
    return credits.crew.reduce((acc: Record<string, string[]>, crewMember) => {
      const { known_for_department, name } = crewMember;
      if (!acc[known_for_department]) {
        acc[known_for_department] = [];
      }
      acc[known_for_department].push(name);

      return acc;
    }, {});
  };

  useEffect(() => {
    (async () => {
      await tmdbv2<CreditsResponse>(`/movie/${filmid}/credits?language=en_US`)
        .then((res) => {
          const _crew = groupCrewByRoles(res!);
          setCrew(_crew);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);
  return (
    <div className="py-2">
      {Object.keys(crew).map((department) => (
        <TagRow label={department} key={department} data={crew[department]} />
      ))}
    </div>
  );
};

export default Crew;
