import React from "react";
import { avatarUrl } from "../services/api/bookmarks";

function BookmarkDetail({ data }) {
  console.log("data", data);

  return (
    <div className="details">
      <div className="bookmarkItemName">{data?.name}</div>
      <img
        className="bookmarkItemImg"
        alt=""
        height={80}
        width={80}
        src={avatarUrl(data?.owner.id)}
      />
    </div>
  );
}

export default BookmarkDetail;
