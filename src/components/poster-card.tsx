import { Ellipsis, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export interface IPosterCard extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  date: string;
  image: string;
  film_id: number;
}
const PosterCard = ({
  name,
  date,
  image,
  film_id,
  className,
  ...props
}: IPosterCard) => {
  return (
    <>
      <div className="relative">
        <Link to={`/film/${film_id}`} className="group">
          <img
            className={`rounded-md border-[0.5px] border-gray-700 duration-75 filter drop-shadow-md ${className}`}
            alt="movie-poster-card"
            src={image}
            {...props}
          />
          <div className="p-3 absolute transition-all duration-300 top-0 opacity-0 group-hover:opacity-100 w-full h-full bg-slate-800/55 border-gray-100 border-[2.5px] rounded-md">
            <p className="font-extrabold drop-shadow-md">{`${name} (${
              date.split("-")[0]
            })`}</p>
            <div className="absolute bottom-0 pb-2">
              <div className="flex items-center space-x-1">
                <a href="#">
                  <Eye className="hover:text-green-500" />
                </a>
                <a href="#">
                  <Heart className="hover:text-red-500" />
                </a>
                <a href="#">
                  <Ellipsis className="hover:text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PosterCard;
