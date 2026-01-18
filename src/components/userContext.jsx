import { createContext } from "react";

const UserContext = createContext("Tony");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
