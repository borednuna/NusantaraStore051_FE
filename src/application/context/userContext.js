import React from 'react';

const UserContext = React.createContext();

function UserProvider(props) {
  const [user, setUser] = React.useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
