import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { useEffect } from "react";
const Film = () => {
  const poster =
    "https://a.ltrbxd.com/resized/film-poster/6/4/1/6/0/8/641608-twisters-0-1000-0-1500-crop.jpg";

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, []);
  const params = useParams();
  return (
    <div className="px-4 lg:px-32 py-2">
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <div className="col-span-1 px-1">
          <div className="flex flex-col items-center">
            <img src={poster} alt="" className="w-9/12 rounded-lg" />
            <Stats watched={210} appears={50} liked={15} />
          </div>
        </div>
        <div className="col-span-2">
          <div className="inline-flex items-center space-x-3 pb-3">
            <p className="text-4xl font-headBold">Twisters</p>
            <p className="underline">2024</p>
            <p className="text-muted-foreground">Directed by</p>
            <p className="underline">Lee Isaac Chung</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <p className="pb-2">chase. ride. survive</p>
              <p className="pb-4 font-textRegular text-muted-foreground">
                As storm season intensifies, the paths of former storm chaser
                Kate Carter and reckless social-media superstar Tyler Owens
                collide when terrifying phenomena never seen before are
                unleashed. The pair and their competing teams find themselves
                squarely in the paths of multiple storm systems converging over
                central Oklahoma in the fight of their lives.
              </p>
              <div className="flex text-m text-green-500 w-full">
                <Link
                  to="/film/set"
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-gray-200 pb-[0.5px]`}
                >
                  cast
                </Link>
                <Link
                  to="/film/set/crew"
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}/crew`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-gray-200 pb-[0.5px]`}
                >
                  crew
                </Link>
                <Link
                  to="/film/set/details"
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}/details`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-gray-200 pb-[0.5px]`}
                >
                  details
                </Link>
                <Link
                  to="/film/set/genre"
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}/genre`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-gray-200 pb-[0.5px]`}
                >
                  genre
                </Link>
                <Link
                  to="/film/set/releases"
                  className={`border-b-2 ${
                    location.pathname === `/film/${params.filmid}/releases`
                      ? "border-gray-200 text-gray-200"
                      : "border-gray-600"
                  } px-2 hover:border-gray-200 pb-[0.5px] w-full`}
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
