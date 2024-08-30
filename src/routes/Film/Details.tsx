import TagRow from "@/components/tag-row";
import { FilmDetail } from "@/services/schema";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation() as { state: FilmDetail };
  return (
    <div className="py-2">
      <TagRow
        label={"Studios"}
        data={state.production_companies.map((studio) => studio.name)}
      />
      <TagRow label={"Country"} data={state.origin_country} />
      <TagRow label={"Language"} data={[state.original_language]} />
    </div>
  );
};

export default Details;
