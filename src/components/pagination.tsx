import { Link } from "react-router-dom";

type PaginationProps = {
  /**
   * The URL to navigate to the next page.
   */
  nextTo: string;

  /**
   * The URL to navigate to the previous page.
   */
  prevTo: string;

  /**
   * A function that takes a page number and returns the URL for that page.
   *
   * @param page - The page number to navigate to.
   * @returns The URL for the given page number.
   */
  jumpTo: (page: number) => string;

  /**
   * The total number of pages available for pagination.
   */
  totalPages: number;

  /**
   * The current active page number.
   */
  currentPage: number;
};

/**
 * Pagination Component
 *
 * This component renders pagination controls including "Previous", "Next", and page number links.
 * It uses the `react-router-dom` `Link` component for navigation.
 *
 * @param {PaginationProps} props - The props for the component.
 * @returns A JSX element rendering the pagination controls.
 */
const Pagination = (props: PaginationProps) => {
  return (
    <div className="flex py-2 justify-between items-center text-muted-foreground">
      <Link
        to={props.prevTo}
        className={`p-2 px-3 rounded-sm text-xs bg-[#283038] ${
          props.currentPage <= 1 ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        Previous
      </Link>
      <span className="text-xs">
        {Array.from({ length: props.totalPages }).map((_, index) => (
          <Link
            key={index}
            to={props.jumpTo(index + 1)}
            className={`p-2 hover:bg-gray-700 ${
              index + 1 === props.currentPage ? "text-gray-600" : null
            }`}
          >
            {index + 1}
          </Link>
        ))}
      </span>
      <Link
        to={props.nextTo}
        className={`p-2 px-3 rounded-sm text-xs bg-[#283038] ${
          Number(props.currentPage) >= props.totalPages
            ? "opacity-0 pointer-events-none"
            : ""
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
