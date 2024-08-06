import { useBackdrop } from "@/components/backdrop-provider";
import { Button } from "@/components/ui/button";

function Landing() {
  const { setBackdrop } = useBackdrop();
  const splash =
    "https://image.tmdb.org/t/p/original//2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg";

  setBackdrop(splash);
  return (
    <main className="px-4 lg:px-28">
      <div
        className="movie-backdrop absolute z-[-100] block w-full h-[500px] top-0 left-0 bg-center bg-no-repeat bg-cover animate-fade-in duration-700"
        style={{
          backgroundImage: `url(${splash})`,
        }}
      ></div>
      <img src={splash} className="h-[300px] opacity-0" alt="" />
      <div className="text-center left-0 right-0 font-headBold text-3xl">
        <h1>Track films you've watched.</h1>
        <h1>Save those want you want to see.</h1>
        <h1>Tell your friends what's good.</h1>
      </div>
      <div className="flex justify-center pt-3">
        <Button className="bg-green-500 text-gray-50 hover:bg-green-700">
          Get Started — It's free!
        </Button>
      </div>
      <h1 className="text-xl text-muted-foreground text-center py-5">
        The social network for film lovers.
      </h1>
    </main>
  );
}

export default Landing;
