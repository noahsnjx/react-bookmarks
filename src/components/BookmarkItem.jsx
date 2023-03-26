import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { avatarUrl } from "../services/api/bookmarks";

function BookmarkItem({ bookmark }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.open(bookmark.url, "_blank");
      }}
      className="bookmarkItemContent"
    >
      <div className="bookmarkItemName">{bookmark.name}</div>
      <img
        className="bookmarkItemImg"
        alt=""
        height={80}
        width={80}
        src={avatarUrl(bookmark.owner.id)}
      />
      <Link
        onClick={(e) => e.stopPropagation()}
        className="info"
        to={`bookmark/${bookmark.id}`}
      >
        <FontAwesomeIcon icon={faInfoCircle} />
      </Link>
    </button>
  );
}

BookmarkItem.propTypes = {
  bookmark: PropTypes.shape({
    id: PropTypes.number,
    isPublic: PropTypes.bool,
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

BookmarkItem.defaultProps = {
  bookmark: null,
};

export default BookmarkItem;
