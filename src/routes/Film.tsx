import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Credit,
  FilmDetail,
  getFilm,
  IMG_BASE_URL,
} from "@/services/tmdb-service";

const Film = () => {
  const [film, setFilm] = useState<FilmDetail>();
  const [directors, setDirectors] = useState<Credit[]>();

  const location = useLocation();
  const { filmid } = useParams();

  const filterDirectors = (data: FilmDetail) => {
    const directors = data.credits.crew.filter(
      (crew) => crew.job === "Director"
    );
    setDirectors(directors);
  };

  useEffect(() => {
    const fetchFilmDetails = async () => {
      await getFilm(filmid!)
        .then((response) => {
          setFilm(response!);
          filterDirectors(response!);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchFilmDetails();
  }, []);

  const params = useParams();
  return (
    <div className="px-4 lg:px-48 py-2 my-0">
      {film?.backdrop_path && (
        <div
          className="movie-backdrop right-0 sm:mx-28 absolute z-[-100] block sm:max-w-full sm:h-[500px] top-0 left-0 bg-center bg-no-repeat bg-cover animate-fade-in duration-700"
          style={{
            backgroundImage: `url(${IMG_BASE_URL}/w1280/${film?.backdrop_path})`,
          }}
        ></div>
      )}
      <img
        rel="preload"
        src={film?.backdrop_path!}
        className="sm:h-[350px] opacity-0"
        alt=""
      />
      <div className="grid grid-cols-3 gap-5 justify-items-center">
        <div className="col-span-1 px-1">
          <div className="flex flex-col mx-5 sticky top-0 pt-1">
            <img
              src={`${IMG_BASE_URL}/w780/${film?.poster_path}`}
              alt=""
              className="rounded-lg border-gray-500 border-2"
            />
            <div className="flex justify-center">
              <Stats watched={210} appears={50} liked={15} />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap pb-4 space-y-2">
            <h1 className="text-3xl pr-2 font-headBold">
              {film?.original_title}
            </h1>
            <div className="flex space-x-2 text-lg pb-2 font-normal">
              <p className="underline">{film?.release_date.split("-")[0]}</p>
              <p className="text-muted-foreground">Directed by</p>
              {directors?.map((director, index) => (
                <p className="underline">
                  {director.name}
                  {index + 1 < directors.length ? ", " : ""}
                </p>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <p className="pb-2">{film?.tagline}</p>
              <p className="pb-4 font-textRegular text-muted-foreground">
                {film?.overview}
              </p>
              <div className="flex text-m text-green-500 w-full">
                <Link
                  to={`/film/${filmid}`}
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-green-500 pb-[0.5px]`}
                >
                  cast
                </Link>
                <Link
                  to={`/film/${filmid}/crew`}
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}/crew`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-green-500 pb-[0.5px]`}
                >
                  crew
                </Link>
                <Link
                  to={`/film/${filmid}/details`}
                  state={film}
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}/details`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-green-500 pb-[0.5px]`}
                >
                  details
                </Link>
                <Link
                  to={`/film/${filmid}/genre`}
                  state={film?.genres}
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}/genre`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-green-500 pb-[0.5px]`}
                >
                  genre
                </Link>
                <Link
                  to={`/film/${filmid}/releases`}
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}/releases`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-green-500 pb-[0.5px] w-full`}
                >
                  releases
                </Link>
              </div>
              <Outlet />
            </div>
            <div className="col-span-1">
              <Button className="w-full">Sign in to review</Button>
              <div className="pb-1" />
              <Button className="w-full">Share</Button>
              <div className="pb-3" />
              <p className="text-xs text-muted-foreground">ratings</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
