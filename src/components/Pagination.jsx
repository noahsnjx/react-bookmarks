import React from "react";
import PropTypes from "prop-types";

function Pagination({ pagination, handleChangePage }) {
  return (
    <div className="pagination">
      <button
        type="button"
        onClick={() => handleChangePage(pagination.first)}
        disabled={pagination.first === pagination.current}
      >
        <img
          height={30}
          width={30}
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/2723/2723003.png"
        />
      </button>
      <button
        type="button"
        onClick={() => handleChangePage(pagination.previous)}
        disabled={!pagination.previous}
      >
        <img
          height={20}
          width={20}
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/467/467274.png"
        />
      </button>
      <button
        type="button"
        onClick={() => handleChangePage(pagination.next)}
        disabled={!pagination.next}
      >
        <img
          height={20}
          width={20}
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/467/467282.png"
        />
      </button>
      <button
        type="button"
        onClick={() => handleChangePage(pagination.last)}
        disabled={pagination.last === pagination.current}
      >
        <img
          height={20}
          width={20}
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/54/54366.png"
        />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    current: PropTypes.number,
    first: PropTypes.number,
    previous: PropTypes.number,
    next: PropTypes.number,
    last: PropTypes.number,
  }).isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {};

export default Pagination;
