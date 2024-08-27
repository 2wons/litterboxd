import dotsLogo from "@/assets/letterboxd-dots-logo.png";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <header className="px-4 xl:px-52 relative">
        <div className="flex justify-between items-center w-full py-5">
          <Link to="/">
            <Logo />
          </Link>
          <div className="hidden sm:flex justify-self-end items-center space-x-4 text-gray-200">
            <NavLinks />
          </div>
          <div className="sm:hidden">
            <Menu onClick={() => setOpen((prev) => !prev)} />
          </div>
        </div>
        {open ? (
          <div
            onBlur={() => setOpen(!open)}
            className="sm:hidden absolute w-full left-0 right-0 flex flex-col items-center bg-black-pearl text-muted-foreground p-5 rounded-b-md space-y-2 animate-in slide-in-from-top-5 z-10"
          >
            <NavLinks />
          </div>
        ) : null}
      </header>
    </nav>
  );
};

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2 max-w-min">
      <img src={dotsLogo} className="w-1/6 h-auto" alt="dots-logo" />
      <h1 className="text-xl sm:text-3xl font-logo bg-gradient-to-b from-[#f5f5f5] to-[#dcdcdc] bg-clip-text text-transparent max-w-min">
        Letterboxd
      </h1>
    </div>
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
