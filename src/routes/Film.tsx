import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { FilmDetail, getFilm, IMG_BASE_URL } from "@/services/tmdb-service";

const Film = () => {
  const [film, setFilm] = useState<FilmDetail>();

  const location = useLocation();
  const { filmid } = useParams();

  useEffect(() => {
    const fetchFilmDetails = async () => {
      await getFilm(filmid!)
        .then((response) => {
          setFilm(response);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchFilmDetails();
  }, []);

  const params = useParams();
  return (
    <div className="px-4 lg:px-56 py-2 my-0">
      <div
        className="movie-backdrop absolute z-[-100] block w-full h-[500px] top-0 left-0 bg-center bg-no-repeat bg-cover animate-fade-in duration-700"
        style={{
          backgroundImage: `url(${IMG_BASE_URL}/original/${film?.backdrop_path})`,
        }}
      ></div>
      <img src={film?.backdrop_path!} className="h-[300px] opacity-0" alt="" />
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <div className="col-span-1 px-1 sticky">
          <div className="flex flex-col mx-5">
            <img
              src={`${IMG_BASE_URL}/w780/${film?.poster_path}`}
              alt=""
              className="rounded-lg"
            />
            <div className="flex justify-center">
              <Stats watched={210} appears={50} liked={15} />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap items-center pb-4 space-y-2 text-sh">
            <p className="text-4xl pr-2 font-headBold">
              {film?.original_title}
            </p>
            <div className="flex space-x-2 text-lg">
              <p className="underline">{film?.release_date.split("-")[0]}</p>
              <p className="text-muted-foreground">Directed by</p>
              <p className="underline">Lee Isaac Chung</p>
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
