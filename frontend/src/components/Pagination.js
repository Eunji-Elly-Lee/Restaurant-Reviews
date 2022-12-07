import usePagination, { DOTS } from "hooks/usePagination";
import "components/Pagination.css";

function Pagination({ currentPage, totalResults, pageSize, onPageChange }) {
  const paginationRange =
    usePagination({ currentPage, totalResults, pageSize });

  const onNext = () => {
    if (currentPage + 1 < Math.ceil(totalResults / pageSize)) {
      onPageChange(currentPage + 1);
    }    
  };

  const onPrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }    
  };
  
  return (
    <div className="pagination">
      <ul>
        <li className="pageBtn" onClick={onPrevious}>
          <strong>&lt;</strong>
        </li>

        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li key={index}>&#8230;</li>
            );
          }

          return (
            <li
              key={index}
              className={
                "pageBtn" + 
                (currentPage + 1 === pageNumber ? " currentPage" : "")
              }
              onClick={() => onPageChange(pageNumber - 1)}
            >
              {pageNumber}
            </li>
          );
        })}

        <li className="pageBtn" onClick={onNext}>
          <strong>&gt;</strong>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
