import Tag from "@/components/tag";

const Details = () => {
  // TODO: fetch details data from tmdb
  return (
    <div className="py-2">
      <div className="flex space-x-1 items-start">
        <p className="text-sm text-muted-foreground max-w-40 w-full flex-nowrap">
          Studios
        </p>
        <div className="flex flex-wrap w-full">
          <div className="pt-1 pr-1">
            <Tag title="Universal Studios" />
          </div>
          <div className="pt-1 pr-1">
            <Tag title="Warner Bros. Pictures" />
          </div>
          <div className="pt-1 pr-1">
            <Tag title="Amblin Entertainment" />
          </div>
          <div className="pt-1 pr-1">
            <Tag title="Domain Entertainment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
