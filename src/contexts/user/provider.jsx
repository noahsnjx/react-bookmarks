import React, { createContext, useEffect, useState } from "react";
import { fetchMeUser } from "../../services/api/users";

export const UserProvider = createContext(undefined);

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    setUserData(
      fetchMeUser().then((data) =>
        data ? setUserData(data) : setUserData(null)
      )
    );
  }, []);

  return (
    <UserProvider.Provider value={userData}>{children}</UserProvider.Provider>
  );
}
