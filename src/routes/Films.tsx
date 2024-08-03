import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { ChevronDown } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import PosterCard from "@/components/poster-card";
import Stats from "@/components/stats";
import { useEffect, useState } from "react";
import { Film, getPopularFilms, IMG_BASE_URL } from "@/services/tmdb-service";

// 2c3440 #14181c

const FilmList = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const decades = [];
  for (let year = 1950; year <= 2020; year += 10) {
    decades.push(<MenubarItem key={year}>{`${year}s`}</MenubarItem>);
  }

  const ad =
    "https://a.ltrbxd.com/resized/sm/upload/44/gp/p4/ly/pro-950-0-950-0-0.jpg";

  useEffect(() => {
    const fetchPopular = async () => {
      await getPopularFilms().then((response) => {
        setFilms(response.results);
      });
    };
    fetchPopular();
  }, []);
  return (
    <div className="px-4 lg:px-52 items-center py-2 pt-10 bg-gradient-to-b from-[#1e242c] to-[#14181c]">
      <div className="flex flex-row space-x-3 items-center">
        <p className="text-muted-foreground min-w-max">Browse by</p>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              Year
              <ChevronDown size={20} className="pl-1" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>All</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Upcoming</MenubarItem>
              <MenubarSeparator />
              {decades.reverse()}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              Rating
              <ChevronDown size={20} className="pl-1" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Highest First</MenubarItem>
              <MenubarItem>Lowest First</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              Popular
              <ChevronDown size={20} className="pl-1" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>All Time</MenubarItem>
              <MenubarItem>This Year</MenubarItem>
              <MenubarItem>This Month</MenubarItem>
              <MenubarItem>This Week</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Genre</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Action</MenubarItem>
              <MenubarItem>Adventure</MenubarItem>
              <MenubarItem>Animation</MenubarItem>
              <MenubarItem>Horror</MenubarItem>
              <MenubarItem>Comedy</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Service</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Other</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <div className="flex justify-center items-center w-full">
          <Input placeholder="Find a Film" />
        </div>
      </div>
      <div className="flex flex-row justify-between text-muted-foreground pt-3 pb-1 text-xs">
        <p>popular films this week</p>
        <p>more</p>
      </div>
      <hr />
      <div className="flex justify-center py-3">
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
            }}
          >
            <CarouselContent>
              {films.map((film, index) => (
                <CarouselItem className="basis-1/4 2xl:basis-1/5" key={index}>
                  <div className="flex flex-col items-center justify-center">
                    <PosterCard
                      film_id={film.id}
                      name={film.title}
                      date={film.release_date}
                      image={`${IMG_BASE_URL}/w300/${film.poster_path}`}
                    />
                  </div>
                  <Stats watched={210} appears={50} liked={15} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={ad} alt="pro-ad" className="py-5" />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground pb-1">
        <p>just reviewed</p>
        <p>2,100,509,010 films watched</p>
      </div>
      <hr />
      <div className="flex shrink flex-nowrap space-x-1 py-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <img
            key={index}
            src="https://a.ltrbxd.com/resized/film-poster/6/4/1/6/0/8/641608-twisters-0-70-0-105-crop.jpg"
            alt="small-poster"
            className="rounded-sm basis-1/12"
          />
        ))}
      </div>
    </div>
  );
};

export default FilmList;
