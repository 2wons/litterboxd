import { image } from "@/services/tmdb-service";
import { Link } from "react-router-dom";

interface PictureProps {
  id: number;
  title: string;
  poster_path: string;
  popularity: number;
  width?: number;
}

interface PosterGalleryProps {
  minWidth?: number;
  films: PictureProps[];
}

const PosterGallery = ({ films }: PosterGalleryProps) => {
  return (
    <section
      className={`grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-1`}
    >
      {films
        .sort((a, b) => b.popularity - a.popularity)
        .map((film) => (
          <Link key={film.id} to={`/film/${film.id}`}>
            {film.poster_path ? (
              <img
                src={image(film.poster_path)}
                alt={film.title}
                className="rounded-md border-[1.5px] border-gray-600 hover:border-gray-300 hover:border-3 duration-300"
              />
            ) : (
              <div className="rounded-md border-[1.5px] border-gray-600 hover:border-gray-300 hover:border-3 duration-300 bg-[#1f2830] w-full h-full p-3">
                <span className="text-muted-foreground font-bold">
                  {film.title}
                </span>
              </div>
            )}
          </Link>
        ))}
    </section>
  );
};

export default PosterGallery;
