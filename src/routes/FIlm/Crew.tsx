import Tag from "@/components/tag";

const Crew = () => {
  // TODO: fetch crew data from tmdb
  return (
    <div className="py-2">
      <div className="flex space-x-1 items-start">
        <p className="text-sm text-muted-foreground max-w-40 w-full flex-nowrap">
          Director
        </p>
        <div className="flex flex-wrap w-full">
          <Tag title="Lee Isaac Chung" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
