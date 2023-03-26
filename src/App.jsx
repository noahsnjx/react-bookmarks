import React from "react";
import Provider from "./router/Provider";
import UserContextProvider from "./contexts/user/provider";

function App() {
  return (
    <UserContextProvider>
      <Provider />
    </UserContextProvider>
  );
}

export default App;
