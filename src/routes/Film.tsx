import Stats from "@/components/stats";
import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilm, IMG_BASE_URL } from "@/services/tmdb-service";
import { Credit, FilmDetail } from "@/services/schema";
import { TvMinimalPlay } from "lucide-react";
import InteractionCard from "@/components/interaction-card";

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
    <div className="px-4 xl:px-56 py-2 my-0">
      {film?.backdrop_path && (
        <div
          className="movie-backdrop right-0 sm:mx-28 absolute z-[-100] block max-w-full h-[500px] top-0 left-0 bg-center bg-no-repeat bg-cover animate-fade-in duration-700"
          style={{
            backgroundImage: `url(${IMG_BASE_URL}/w1280/${film?.backdrop_path})`,
          }}
        ></div>
      )}
      <img
        rel="preload"
        src={film?.backdrop_path!}
        className="h-[250px] sm:h-[350px] opacity-0"
        alt=""
      />
      <div className="sm:grid grid-cols-4 sm:gap-8 justify-items-center">
        <div className="col-span-1 place-items-center">
          <div className="sm:flex flex-col mx-2 sm:mx-1 sticky top-0 pt-1 pb-3 float-right w-1/4 sm:w-full sm:float-none">
            <div className="drop-shadow-2xl">
              <img
                src={`${IMG_BASE_URL}/w780/${film?.poster_path}`}
                alt=""
                className="rounded-lg w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.55)] border-[1px] border-gray-50 border-opacity-15"
              />
            </div>
            <div className="hidden sm:flex justify-center z-100">
              <Stats watched={210} appears={50} liked={15} size="sm" />
            </div>
            <div className="hidden sm:block border-[1px] border-gray-50 border-opacity-15 mt-4 rounded-sm text-muted-foreground">
              <div className="flex justify-between bg-[#242c34] p-2 text-xs items-center">
                <p>where to watch</p>
                <div className="flex space-x-1 items-center">
                  <TvMinimalPlay size={18} />
                  <p>Trailer</p>
                </div>
              </div>
              <div className="p-2 ml-2 text-xs border-b-[1px] border-gray-50 border-opacity-15">
                <p>Not streaming.</p>
              </div>
              <div className="p-2 ml-2 text-xs">
                <p className="text-sky-500">All services...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:col-span-3 px-2">
          <div className="flex flex-wrap pb-4 space-y-2">
            <h1 className="text-3xl pr-2 font-headBold [text-shadow:_0_4px_5px_rgba(0,0,0,0.95)]">
              {film?.original_title}
            </h1>
            <div className="flex flex-wrap space-x-2 text-lg pb-2 font-normal">
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
          <div className="md:grid grid-cols-5 gap-10">
            <div className="col-span-3">
              <p className="pb-2">{film?.tagline}</p>
              <p className="pb-4 font-textRegular text-sm sm:text-base text-muted-foreground">
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
            <div className="col-span-2 px-2">
              <InteractionCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
