import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="container justify-center">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p className="text-gray-600">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
