import React, { useEffect, useMemo, useState } from 'react';
import { User } from '../interfaces/user';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const UserContext = React.createContext({} as any);

function UserProvider(props: any) {
  const [users, setUsers] = useState<User[]>([]);
  const apiHost = process.env.REACT_APP_API_HOST

  useEffect(() => {
    axios.get(`${apiHost}/rrafols/mobile_test/master/data.json`).then(res => {
      const userArray: User[] = res.data['Brastlewark'];
      setUsers(userArray);
    });
  }, []);

  const totalCount = useMemo(() => users.length, [users]);

  const getUserById = (userId: number) => {
    return users.find(user => user.id.toString() === userId.toString());
  };

  const getFriends = (friendNames: string[]) => {
    return users.filter((user) => friendNames.indexOf(user.name) !== -1);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        totalCount,
        setUsers,
        getUserById,
        getFriends,
      }}
      {...props}
    />
  );
}

function useUser() {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

export { UserProvider, useUser };
