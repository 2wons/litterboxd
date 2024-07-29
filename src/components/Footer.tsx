const Footer = () => {
  return (
    <footer className="mx-0 bg-slate-800 py-5 px-4 lg:px-40">
      <div className="flex flex-row space-x-2 font-bold text-muted-foreground text-sm">
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
      <p className="text-xs text-muted-foreground text-slate-600">
        © Letterboxd Limited. Made by fans in Aotearoa New Zealand. Film data
        from TMDb.
      </p>
    </footer>
  );
};

export default Footer;
