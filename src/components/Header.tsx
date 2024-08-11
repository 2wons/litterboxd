import dotsLogo from "@/assets/letterboxd-dots-logo.png";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <header className="px-4 lg:px-52 pt-5 pb-2">
          <div className="flex flex-row justify-center items-center">
            <Link to="/">
              <div className="flex flex-row items-center space-x-2">
                <img src={dotsLogo} className="w-1/12 h-auto" alt="dots-logo" />
                <h1 className="text-3xl font-logo bg-gradient-to-b from-[#f5f5f5] to-[#dcdcdc] bg-clip-text text-transparent">
                  Letterboxd
                </h1>
              </div>
            </Link>
            <div className="flex flex-row justify-self-end items-center space-x-4 text-gray-200">
              <Link to="/films" className="hover:text-foreground">
                Films
              </Link>
              <Link to="#" className="hover:text-foreground">
                Series
              </Link>
              <a href="#" className="hover:text-foreground">
                Actors
              </a>
              <a href="#" className="hover:text-foreground">
                Lists
              </a>
              <Input
                placeholder="search"
                className="rounded-3xl opacity-65 bg-gray-500 p-2 text-xs border-0 h-auto "
              />
            </div>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
