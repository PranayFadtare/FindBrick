import { useContext, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./layout.scss";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { SocketContext } from "../../context/SocketContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const fetch = useNotificationStore((state) => state.fetch);

  // Fetch initial notification count when user logs in
  useEffect(() => {
    if (currentUser) {
      fetch();
    }
  }, [currentUser]); // Removed fetch from dependency array

  // Listen for new messages from socket to update notifications
  useEffect(() => {
    if (socket) {
      const handleGetMessage = (data) => {
        fetch();
      };
      socket.on("getMessage", handleGetMessage);

      // Cleanup function to remove the event listener
      return () => {
        socket.off("getMessage", handleGetMessage);
      };
    }
  }, [socket]); // Removed fetch from dependency array

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export { Layout, RequireAuth };
