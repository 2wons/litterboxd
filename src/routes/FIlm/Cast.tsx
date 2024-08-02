import Tag from "@/components/tag";
import { useParams } from "react-router-dom";

const Cast = () => {
  const params = useParams();

  // TODO: fetch crew from tmdb api
  console.log(params.filmid);

  const castList = [
    "Daisy Edgar-Jones",
    "Glen Powell",
    "Anthony Ramos",
    "Brandon Perea",
    "Maura Tierney",
    "Harry Hadden-Paton",
    "Sasha Lane",
    "David Born",
  ];
  return (
    <div className="flex flex-row flex-wrap pt-1">
      {castList.map((cast, index) => (
        <div key={index} className="pt-1 pr-1">
          <Tag href="" title={cast} />
        </div>
      ))}
    </div>
  );
};

export default Cast;
