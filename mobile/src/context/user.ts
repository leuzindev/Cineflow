import { createContext } from 'react';

type UserContextType = {
  userName: string;
  setUserName: (name: string) => void;
};

export const UserContext = createContext<UserContextType>({
  userName: '',
  setUserName: () => {},
});
