const Pagination = ({ postsPerPage, length, currentPage, handlePagination }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className=" text-right my-8">
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={
            currentPage === pageNumber
              ? "bg-black text-white border border-white px-3 py-2 "
              : "px-3 py-2"
          }
          onClick={() => handlePagination(pageNumber)} // Call handlePagination on click
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
