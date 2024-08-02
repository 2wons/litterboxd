import { Eye, Grid2X2, Heart } from "lucide-react";

export interface Stats {
  watched: number;
  appears: number;
  liked: number;
}

const Stats = ({ watched, appears, liked }: Stats) => {
  return (
    <div className="flex flex-wrap justify-center text-xs font-extralight text-muted-foreground space-x-2 pt-1">
      <div className="flex space-x-[0.5px]">
        <Eye size={14} className="text-lime-400" />
        <p>{watched}k</p>
      </div>
      <div className="flex space-x-[0.5px]">
        <Grid2X2 size={14} className="text-sky-500" />
        <p>{appears}k</p>
      </div>
      <div className="flex space-x-[0.5px]">
        <Heart size={14} className="text-orange-500" />
        <p>{liked}k</p>
      </div>
    </div>
  );
};

export default Stats;
