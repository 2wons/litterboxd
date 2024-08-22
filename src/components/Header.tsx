import dotsLogo from "@/assets/letterboxd-dots-logo.png";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <header className="px-4 lg:px-52">
          <div className="flex flex-row justify-between items-center w-full py-5">
            <Link to="/">
              <div className="flex flex-row items-center space-x-2">
                <img src={dotsLogo} className="w-1/12 h-auto" alt="dots-logo" />
                <h1 className="text-xl sm:text-3xl font-logo bg-gradient-to-b from-[#f5f5f5] to-[#dcdcdc] bg-clip-text text-transparent">
                  Letterboxd
                </h1>
              </div>
            </Link>
            <div className="hidden sm:flex flex-row justify-self-end items-center space-x-4 text-gray-200">
              <NavLinks />
            </div>
            <div className="sm:hidden">
              <Menu onClick={() => setOpen((prev) => !prev)} />
            </div>
          </div>
          {open ? (
            <div
              onBlur={() => setOpen(!open)}
              className="sm:hidden flex flex-col items-center bg-[#14181c] text-muted-foreground p-3 rounded-b-md space-y-2 animate-in fade-in zoom-in-95 slide-in-from-top-2"
            >
              <NavLinks />
            </div>
          ) : null}
        </header>
      </nav>
    </>
  );
};

const NavLinks = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  return (
    <>
      <a href="/films" className="hover:text-foreground">
        Films
      </a>
      <a href="#" className="hover:text-foreground">
        Series
      </a>
      <a href="#" className="hover:text-foreground">
        Actors
      </a>
      <a href="#" className="hover:text-foreground">
        Lists
      </a>
      <Input
        placeholder="search"
        className="rounded-3xl opacity-65 bg-gray-500 p-2 text-xs border-0 h-auto min-w-28"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        onKeyUp={(event) => {
          event.key === "Enter" ? navigate(`/search/${search}`) : null;
        }}
      />
    </>
  );
};

export default Header;
