import { Film, image } from "@/services/tmdb-service";
import { Link } from "react-router-dom";

const PosterGallery = ({ films }: { films: Film[] }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-1">
      {films.map((film) => (
        <Link key={film.id} to={`/film/${film.id}`}>
          <img
            src={image(film.poster_path)}
            alt={film.title}
            className="rounded-md border-[1.5px] border-gray-600 hover:border-gray-300 hover:border-3 duration-300"
          />
        </Link>
      ))}
    </section>
  );
};

export default PosterGallery;
