import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const FilmList = () => {
  const decades = [];
  for (let year = 1950; year <= 2020; year += 10) {
    decades.push(<MenubarItem key={year}>{`${year}s`}</MenubarItem>);
  }
  return (
    <div className="lg:px-40 flex items-center py-2 pt-10 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="flex flex-row space-x-3 items-center w-full">
        <p className="text-muted-foreground">Browse by</p>
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
        <div className="flex justify-center items-center">
          <Input placeholder="Find a Film" />
        </div>
      </div>
    </div>
  );
};

export default FilmList;
