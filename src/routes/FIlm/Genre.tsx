import Tag from "@/components/tag";

const Genre = () => {
  const genres = ["Animation", "Family", "Adventure", "Action"];

  const themes = [
    "Epic Heroes",
    "Crude Humor and Satire",
    "High Speed and Special Ops",
  ];

  return (
    <div className="py-2">
      <div className="flex space-x-1 items-start">
        <p className="text-sm text-muted-foreground max-w-40 w-full flex-nowrap">
          Genres
        </p>
        <div className="flex flex-wrap w-full">
          {genres.map((genre, index) => (
            <div className="pt-1 pr-1">
              <Tag title={genre} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-x-1 items-start">
        <p className="text-sm text-muted-foreground max-w-40 w-full flex-nowrap">
          Themes
        </p>
        <div className="flex flex-wrap w-full">
          {themes.map((theme, index) => (
            <div className="pt-1 pr-1">
              <Tag title={theme} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Genre;
