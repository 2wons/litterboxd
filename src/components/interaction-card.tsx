import { CalendarPlus, Eye, Heart, Star } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import ActionButton from "@/components/action-button";

const InteractionCard = () => {
  return (
    <>
      <div className="bg-[#445566] rounded-sm max-w-60 text-[#bbccdd]">
        <div className="p-3 flex justify-between text-sm">
          <ActionButton Icon={Eye} label="Watch" fill="#22c55e" />
          <ActionButton Icon={Heart} label="Like" fill="#f231a5" />
          <ActionButton Icon={CalendarPlus} label="Watchlist" fill="#0ea5e9" />
        </div>
        <Separator />
        <div className="p-3 flex flex-col items-center text-xs space-y-1">
          <p>Rate</p>
          <div className="flex">
            <Star
              className="text-slate-700 bg-clip-text"
              fill="#334155"
              size={32}
            />
            <Star
              className="text-slate-700 bg-clip-text"
              fill="#334155"
              size={32}
            />
            <Star
              className="text-slate-700 bg-clip-text"
              fill="#334155"
              size={32}
            />
            <Star
              className="text-slate-700 bg-clip-text"
              fill="#334155"
              size={32}
            />
            <Star
              className="text-slate-700 bg-clip-text"
              fill="#334155"
              size={32}
            />
          </div>
        </div>
        <Separator />
        <div className="p-3 text-center text-xs">
          <p>Show your activity</p>
        </div>
        <Separator />
        <div className="p-3 text-center text-xs">
          <button>Review or log...</button>
        </div>
        <Separator />
        <div className="p-3 text-center text-xs">
          <p>Add to lists...</p>
        </div>
        <Separator />
        <div className="p-3 text-center text-xs">
          <p>
            Go{" "}
            <span className="bg-sky-500 p-1 text-gray-50 rounded-sm">
              patron
            </span>{" "}
            to change images
          </p>
        </div>
        <Separator />
        <div className="p-3 text-center text-xs">
          <p>Share</p>
        </div>
      </div>
      {/* ratings section */}
      <SectionHeading
        label="Ratings"
        className="text-sm mt-3"
        rel={<p className="text-xs">1K Fans</p>}
      />
    </>
  );
};

const Separator = () => {
  return <div className="bg-gray-800 p-[0.5px]"></div>;
};

export default InteractionCard;
