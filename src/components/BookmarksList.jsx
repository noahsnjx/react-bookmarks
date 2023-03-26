import React, { useCallback, useEffect, useState } from "react";
import { fetchAllBookmarks } from "../services/api/bookmarks";
import BookmarkItem from "./BookmarkItem";
import Pagination from "./Pagination";
import paginationFromHydraView from "../services/transformers/paginationFromHydraView";
import UserButton from "./UserButton";

function BookmarksList() {
  const [bookmarksList, setBookmarksList] = useState();
  const [bookmarks, setBookmarks] = useState([]);
  const [pagination, setPagination] = useState({});

  const updatePage = (page) => {
    fetchAllBookmarks(page).then((data) => {
      setBookmarks(data["hydra:member"]);
      setPagination(paginationFromHydraView(data["hydra:view"]));
    });
  };

  const onChangePage = useCallback((page) => {
    updatePage(page);
  }, []);

  useEffect(() => {
    updatePage(1);
  }, []);

  useEffect(() => {
    setBookmarksList(
      bookmarks.map((bookmark) => (
        <BookmarkItem bookmark={bookmark} key={bookmark.id} />
      ))
    );
  }, [bookmarks]);

  return (
    <>
      <UserButton />
      <div className="grid"> {bookmarksList} </div>
      <Pagination pagination={pagination} handleChangePage={onChangePage} />
    </>
  );
}

BookmarksList.propTypes = {};

BookmarksList.defaultProps = {};

export default BookmarksList;
