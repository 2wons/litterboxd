import dotsLogo from "@/assets/letterboxd-dots-logo.png";
import { Input } from "@/components/ui/input";
import { getImages, IMG_BASE_URL } from "@/services/tmdb-service";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useBackdrop } from "./backdrop-provider";

const Header = () => {
  const { backdrop } = useBackdrop();
  const location = useLocation();

  const splash =
    "https://image.tmdb.org/t/p/original//2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg";

  return (
    <div
      className={
        location.pathname === "/films"
          ? ""
          : "movie-backdrop block h-[450px] bg-center bg-no-repeat bg-cover animate-fade-in duration-700 relative"
      }
      style={{
        backgroundImage: `url(${
          location.pathname === "/films"
            ? ""
            : location.pathname === "/"
            ? splash
            : backdrop
        })`,
      }}
    >
      <header className="px-4 lg:px-52 pt-5 pb-2">
        <div className="flex flex-row justify-center items-center">
          <Link to="/">
            <div className="flex flex-row items-center space-x-2">
              <img src={dotsLogo} className="w-1/12 h-auto" alt="dots-logo" />
              <h1 className="text-3xl font-logo">Letterboxd</h1>
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
            <Input placeholder="search" className="rounded-2xl" />
          </div>
        </div>
      </header>
      {location.pathname === "/" && (
        <div className="text-center absolute bottom-0 left-0 right-0 font-headBold text-3xl">
          <h1>Track films you've watched.</h1>
          <h1>Save those want you want to see.</h1>
          <h1>Tell your friends what's good.</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
