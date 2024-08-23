import { image } from "@/services/tmdb-service";
import { Film } from "@/services/schema";
import { Link } from "react-router-dom";

type ResultCardProps = {
  film: Film;
};

const ResultCard = ({ film }: ResultCardProps) => {
  return (
    <div className="flex py-5 space-x-6 border-b-2 border-slate-700">
      <Link to={`/film/${film.id}`}>
        <img
          src={image(film.poster_path!)}
          alt="poster"
          className="min-w-20 max-w-20 rounded-sm border-b-[1.5px] bg-slate-800"
        />
      </Link>
      <div>
        <div className="inline-flex space-x-1 items-center pb-2">
          <Link to={`/film/${film.id}`} className="hover:text-sky-400">
            <h1 className="text-xl font-headBold">{film.original_title}</h1>
          </Link>
          <span className="text-lg font-light text-muted-foreground">
            {film.release_date.split("-")[0]}
          </span>
        </div>
        <p className="text-muted-foreground text-sm">{film.overview}</p>
      </div>
    </div>
  );
};

export default ResultCard;
