import React, { useCallback, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import { UserProvider } from "../contexts/user/provider";
import { fetchLogoutUser } from "../services/api/users";

function UserButton() {
  // const userData = useContext(UserProvider);
  const userData = "null";

  const userDataLogout = { ...userData, logout: fetchLogoutUser };

  if (userData === undefined)
    return <FontAwesomeIcon className="spinner" spin icon={faSpinner} />;
  if (userData === null) {
    return (
      <button
        className="userConnexionButton"
        type="button"
        onClick={() => window.open("http://bookmarks-api/login", "_blank")}
      >
        Connexion
      </button>
    );
  }

  return (
    <>
      <button
        className="userConnexionButton"
        type="button"
        onClick={() => userDataLogout.logout}
      >
        Déconnexion
      </button>
      <Link className="userConnexionButton unstyleA" to="bookmark/create">
        Ajouter un signet
      </Link>
    </>
  );
}

export default UserButton;
