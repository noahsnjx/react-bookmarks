import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <>
      <h1>Erreur {error.status}</h1>
      <p>{error.data}</p>
    </>
  );
}

export default Error;
