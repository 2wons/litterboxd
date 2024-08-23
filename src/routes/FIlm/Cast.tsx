import Tag from "@/components/tag";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { tmdb } from "@/services/tmdb-service";
import { Credit, CreditsResponse } from "@/services/schema";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Cast = () => {
  const [cast, setCast] = useState<Credit[]>([]);
  const { filmid } = useParams();

  useEffect(() => {
    (async () => {
      await tmdb<CreditsResponse>(`/movie/${filmid}/credits?language=en_US`)
        .then((res) => {
          setCast(res!.cast);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  return (
    <div className="flex flex-row flex-wrap py-2.5">
      {cast.map((cast: any, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <div className="pt-1 pr-1">
              <Link to={`/actor/${cast.id}`}>
                <Tag href="#" title={cast.name} />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{cast.character || "-"}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default Cast;
