import TagRow from "@/components/tag-row";
import { useLocation } from "react-router-dom";

type Genre = {
  id: number;
  name: string;
};

const Genre = () => {
  let { state } = useLocation() as { state: Genre[] };

  const themes = [
    "Epic Heroes",
    "Crude Humor and Satire",
    "High Speed and Special Ops",
  ];

  return (
    <div className="py-2">
      <TagRow label="Genres" data={state.map((genre) => genre.name)} />
      <TagRow label="Themes" data={themes} />
    </div>
  );
};

export default Genre;
