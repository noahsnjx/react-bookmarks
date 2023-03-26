import React from "react";
import { Link } from "react-router-dom";

function BookmarkForm() {
  return (
    <>
      <form className="formCreateBookmark">
        <label>
          Name <br />
          <input className="formCreateBookmarkInput" type="text" name="name" />
        </label>
        <label>
          Url <br />
          <input className="formCreateBookmarkInput" type="text" name="url" />
        </label>
        <label>
          Avatar <br />
          <input
            className="formCreateBookmarkInput"
            type="text"
            name="avatar"
          />
        </label>
        <input
          className="formCreateBookmarkInput"
          type="submit"
          value="Submit"
        />
      </form>
      <Link className="returnForm" to="/">
        Retour
      </Link>
    </>
  );
}

export default BookmarkForm;
