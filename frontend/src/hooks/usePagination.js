import { useMemo } from "react";

export const DOTS = "...";

function usePagination({ currentPage, totalResults, pageSize }) {
  return useMemo(() => {
    const pageNumbers = [];
    const lastPageNumber = Math.ceil(totalResults / pageSize) || 0;

    if (lastPageNumber <= 3) {
      for (let i = 1; i <= lastPageNumber; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 1) {
        pageNumbers.push(
          1,
          2,
          3,
          DOTS,
          lastPageNumber
        );
      } else if (currentPage >= lastPageNumber - 2) {
        pageNumbers.push(
          1,
          DOTS,
          lastPageNumber - 2,
          lastPageNumber - 1,
          lastPageNumber
        );
      } else {
        pageNumbers.push(
          1,
          DOTS,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          DOTS,
          lastPageNumber
        );
      }
    }

    return pageNumbers;
  }, [currentPage, totalResults, pageSize]);
}

export default usePagination;
