import dotsLogo from "@/assets/letterboxd-dots-logo.png";
import { Input } from "@/components/ui/input";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const splash =
    "https://a.ltrbxd.com/resized/sm/upload/6q/qu/l2/st/twisters-1200-1200-675-675-crop-000000.jpg";
  return (
    <div
      className={
        location.pathname === "/films"
          ? ""
          : "movie-backdrop block h-[450px] bg-center bg-no-repeat bg-cover relative"
      }
      style={{
        backgroundImage: `url(${location.pathname === "/films" ? "" : splash})`,
      }}
    >
      <header className="px-4 lg:px-40 pt-5 pb-2">
        <div className="flex flex-row justify-center">
          <div className="flex flex-row items-center space-x-2">
            <img src={dotsLogo} className="w-1/12 h-auto" alt="dots-logo" />
            <h1 className="text-3xl font-logo">Letterboxd</h1>
          </div>
          <div className="flex flex-row justify-self-end items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Films
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Series
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Actors
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Lists
            </a>
            <Input placeholder="search" className="rounded-2xl" />
          </div>
        </div>
      </header>
      {location.pathname === "/" && (
        <div className="text-center absolute bottom-0 left-0 right-0 font-bold text-3xl">
          <h1>Track films you've watched.</h1>
          <h1>Save those want you want to see.</h1>
          <h1>Tell your friends what's good.</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
