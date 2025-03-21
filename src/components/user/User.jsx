import React from "react";
import styles from "./User.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function User() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <>
      {isAuthenticated && (
        <div className={styles.user}>
          <img src={user?.avatar} alt={user?.name} />
          <span>{user?.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
}

export default User;
