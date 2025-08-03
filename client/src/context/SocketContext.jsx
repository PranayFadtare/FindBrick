import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Establish socket connection only when there is a logged-in user
    if (currentUser) {
      const newSocket = io("http://localhost:4000");
      setSocket(newSocket);

      // Cleanup function to disconnect socket when component unmounts or user changes
      return () => {
        newSocket.disconnect();
      };
    } else {
      // If there is no user, make sure any existing socket is disconnected
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    }
  }, [currentUser]); // Dependency array ensures this runs when the user logs in or out

  // Emit "newUser" event when the socket connects and we have a user
  useEffect(() => {
    if (socket && currentUser) {
      socket.emit("newUser", currentUser.id);
    }
  }, [socket, currentUser]); // Run when socket or user changes

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
