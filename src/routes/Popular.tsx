import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { getPopularFilms } from "@/services/tmdb-service";
import { Film } from "@/services/schema";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import PosterGallery from "@/components/poster-gallery";

const Popular = () => {
  const params = useParams() as { pageno: string };
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(false);
  const [filmCount, setFilmCount] = useState(0);

  const page = params.pageno ?? "1";

  document.title = "Popular Films | Letterboxd";

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getPopularFilms({ page: page })
        .then((res) => {
          setFilms(res!.results);
          setFilmCount(res!.total_pages);
        })
        .catch((error) => {
          console.log(error);
        });
      setLoading(false);
    })();
  }, [page]);

  return (
    <Container>
      <div className="flex justify-between text-muted-foreground text-sm pb-1">
        <span className="">films</span>
        <div className="space-x-2">
          <span>decade</span>
          <span>genre</span>
          <span>service</span>
        </div>
      </div>
      <hr className="pb-3" />
      <div className="text-center bg-gray-700 text-sm p-2.5 rounded-sm text-muted-foreground mb-2">
        <p>There are {filmCount} films.</p>
      </div>
      {!loading ? (
        <PosterGallery films={films} />
      ) : (
        <div className="flex justify-center min-w-full py-2">
          <LoaderCircle className="animate-spin" />
        </div>
      )}
      <div className="flex justify-between py-2 border-t-2 mt-2">
        <Link to={`/films/popular/page/${Number(page) - 1}`}>
          <Button>previous</Button>
        </Link>
        <Link to={`/films/popular/page/${Number(page) + 1}`}>
          <Button>next</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Popular;
