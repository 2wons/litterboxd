import dotsLogo from "@/assets/letterboxd-dots-logo.png";
import { Input } from "@/components/ui/input";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
            {open ? (
              <div className="transform transition-transform duration-300 animate-in rotate-90">
                <X
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                  size={24}
                />
              </div>
            ) : (
              <div className="transform transition-transform duration-300 animate-in rotate-180">
                <Menu
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                  size={24}
                />
              </div>
            )}
          </div>
        </div>

        <div
          onBlur={() => setOpen(!open)}
          className={`sm:hidden absolute w-full left-0 right-0 transition-all ease-in-out delay-75 z-10 duration-300 overflow-y-hidden`}
          style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
        >
          <div
            ref={ref}
            className="flex flex-col items-end text-xl bg-black-pearl text-muted-foreground p-5 space-y-4 rounded-b-md"
          >
            <NavLinks />
          </div>
        </div>
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
        placeholder="Search Film"
        className="rounded-3xl opacity-85 bg-gray-200 p-2 text-x text-black hover:text-gray-200 border-0 h-auto min-w-28"
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
