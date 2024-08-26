const Footer = () => {
  return (
    <footer className="mx-0 bg-[#2c3440] py-5 px-4 lg:px-40">
      <div className="flex flex-row space-x-2 font-bold text-muted-foreground text-sm flex-wrap">
        <a href="#" className="hover:text-foreground">
          About
        </a>
        <a href="#" className="hover:text-foreground">
          Pro
        </a>
        <a href="#" className="hover:text-foreground">
          News
        </a>
        <a href="#" className="hover:text-foreground">
          Apps
        </a>
        <a href="#" className="hover:text-foreground">
          Podcast
        </a>
        <a href="#" className="hover:text-foreground">
          Year in Review
        </a>
        <a href="#" className="hover:text-foreground">
          Gifts
        </a>
        <a href="#" className="hover:text-foreground">
          Help
        </a>
        <a href="#" className="hover:text-foreground">
          Terms
        </a>
        <a href="#" className="hover:text-foreground">
          API
        </a>
        <a href="#" className="hover:text-foreground">
          Contact
        </a>
      </div>
      <p className="text-xs text-muted-foreground text-slate-600 pt-2">
        This site is a fan-made project and is not affiliated with or endorsed
        by Letterboxd or TMDB. All film data is provided by TMDB.
      </p>
    </footer>
  );
};

export default Footer;
