export interface IPosterCard extends React.ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}
const PosterCard = ({ image, className, ...props }: IPosterCard) => {
  return (
    <>
      <img
        className={`rounded-md border-[0.5px] border-gray-700 hover:border-lime-500 hover:border-[2.5px] duration-75 filter drop-shadow-md ${className}`}
        alt="movie-poster-card"
        src={image}
        {...props}
      />
    </>
  );
};

export default PosterCard;
