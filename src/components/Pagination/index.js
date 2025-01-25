import './index.css'

const Pagination = ({currentPage, setCurrentPage}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="pagination-container">
      <button
        type="button"
        onClick={handlePrevPage}
        className="pagination-btn prev-btn"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="page-number">{currentPage}</span>
      <button
        type="button"
        onClick={handleNextPage}
        className="pagination-btn next-btn"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
