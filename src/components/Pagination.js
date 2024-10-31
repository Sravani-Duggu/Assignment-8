import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalpages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}> previous </button>
      {pages.map(page => (
        <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? 'active' : ''}> {page} </button>
      ))}
      <button onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}> Next </button>
    </div>
  );
};

export default Pagination;