import { Container } from "@/components/container";
import Pagination from "@/components/pagination";
import ResultCard from "@/components/result-card";
import SectionHeading from "@/components/section-heading";
import { Film, tmdb } from "@/services/tmdb-service";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const { keyword } = useParams();

  const [totalResults, setTotalResults] = useState(0);
  const [films, setFilms] = useState<Film[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const page = searchParams.get("page") || "1";

  const jumpToPage = (page: number) => {
    return `/search/${keyword}?page=${page}`;
  };

  useEffect(() => {
    (async () => {
      await tmdb<SearchResponse>(
        `/search/movie?query=${keyword}&language=en-US&page=${page}`
      ).then((response) => {
        setFilms(response!.results);
        setTotalResults(response!.total_results);
        setTotalPages(response!.total_pages);
      });
    })();
  }, [keyword, page]);

  return (
    <Container>
      <div className="md:flex md:space-x-16">
        <div className="w-full md:w-3/4">
          <SectionHeading
            label={`Found at least ${totalResults} Results for "${keyword}"`}
          />
          {films.map((film) => (
            <ResultCard film={film} key={film.id} />
          ))}
          <Pagination
            nextTo={`/search/${keyword}/?page=${Number(page) + 1}`}
            prevTo={`/search/${keyword}/?page=${Number(page) - 1}`}
            jumpTo={jumpToPage}
            totalPages={totalPages}
            currentPage={Number(page)}
          />
        </div>
        <div className="w-full md:w-1/4">
          <SectionHeading label="Show Results For" />
        </div>
      </div>
    </Container>
  );
};

type SearchResponse = {
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
};

export default Search;
