import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { fetchBookmark } from "../../services/api/bookmarks";
import BookmarkDetail from "../../components/BookmarkDetail";

function Details() {
  const { bookmarkId } = useParams();
  const [bookmark, setBookmark] = useState();

  useEffect(() => {
    fetchBookmark(bookmarkId).then((data) => setBookmark(data));
  }, [bookmarkId]);

  return <BookmarkDetail data={bookmark} />;
}

export default Details;
