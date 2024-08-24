import { useMemo } from "react";
import { Link } from "react-router-dom";

type PaginationProps = {
  /**
   * A function that takes a page number and returns the URL(string) for that page.
   *
   * @param page - The page number to navigate to.
   * @returns The URL for the given page number.
   */
  onPageChange: (page: number) => string;

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
  const paginationRange = useMemo(() => {
    const siblingCount = 2;

    // Pages count is determined as siblingCount(1) + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageDisplayed = siblingCount * 2 + 5;

    // https://stackoverflow.com/a/46385144
    var sideWidth = totalPageDisplayed < 9 ? 1 : 2;
    var leftWidth = (totalPageDisplayed - sideWidth * 2 - 3) >> 1;
    var rightWidth = (totalPageDisplayed - sideWidth * 2 - 2) >> 1;

    /* Case 1:
       If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
     */
    if (totalPageDisplayed >= props.totalPages) {
      return range(1, props.totalPages);
    }

    if (props.currentPage <= totalPageDisplayed - sideWidth - 1 - rightWidth) {
      // no break on the left of the page
      return range(1, totalPageDisplayed - sideWidth - 1).concat(
        0,
        range(props.totalPages - sideWidth + 1, props.totalPages)
      );
    }

    if (props.currentPage >= props.totalPages - sideWidth - 1 - rightWidth) {
      // no break on the right of the page
      return range(1, sideWidth).concat(
        0,
        range(
          props.totalPages - sideWidth - 1 - rightWidth - leftWidth,
          props.totalPages
        )
      );
    }

    // Breaks on both sides
    return range(1, sideWidth).concat(
      0,
      range(props.currentPage - leftWidth, props.currentPage + rightWidth),
      0,
      range(props.totalPages - sideWidth + 1, props.totalPages)
    );
  }, [props.totalPages, props.currentPage]);
  return (
    <div className="flex py-2 justify-between items-center text-muted-foreground">
      <Link
        to={props.onPageChange(props.currentPage - 1)}
        className={`p-2 px-3 rounded-sm text-xs bg-[#283038] ${
          props.currentPage <= 1 ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        Previous
      </Link>
      <span className="text-xs">
        {Array.from(paginationRange).map((number, index) => {
          if (number <= 0) {
            return <span>...</span>;
          }
          return (
            <Link
              key={index}
              to={props.onPageChange(number)}
              className={`p-2 hover:bg-gray-700 ${
                number === props.currentPage ? "text-gray-600" : null
              }`}
            >
              {number}
            </Link>
          );
        })}
      </span>
      <Link
        to={props.onPageChange(props.currentPage + 1)}
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

const range = (start: number, end: number) => {
  let length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

export default Pagination;
