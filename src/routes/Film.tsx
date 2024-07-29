import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Grid2X2 } from "lucide-react";

const Film = () => {
  const splash =
    "https://a.ltrbxd.com/resized/sm/upload/6q/qu/l2/st/twisters-1200-1200-675-675-crop-000000.jpg";
  const poster =
    "https://a.ltrbxd.com/resized/film-poster/6/4/1/6/0/8/641608-twisters-0-1000-0-1500-crop.jpg";
  return (
    <div className="px-4 lg:px-32 py-2">
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <div className="col-span-1 px-1">
          <div className="flex flex-col items-center">
            <img src={poster} alt="" className="w-9/12 rounded-lg" />
            <div className="inline-flex space-x-2 text-xs text-muted-foreground items-center py-2">
              <div className="inline-flex space-x-1">
                <Eye size={16} className="text-green-500" />
                <span>261k</span>
              </div>
              <div className="inline-flex space-x-1">
                <Grid2X2 size={16} className="text-sky-500" />
                <span>57k</span>
              </div>
              <div className="inline-flex space-x-1">
                <Heart size={16} className="text-orange-400" />
                <span>90k</span>
              </div>
            </div>
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
              <div className="inline-flex space-x-3 text-sm text-green-400">
                <p>cast</p>
                <p>crew</p>
                <p>details</p>
                <p>genres</p>
                <p>releases</p>
              </div>
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
