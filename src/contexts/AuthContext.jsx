import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = { isAuthenticated: false, user: null };

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error("unknown action type");
  }
}

function AuthProvider({ children }) {
  const [{ isAuthenticated, user }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const FAKE_USER = {
    name: "Bolaji",
    email: "example@gmail.com",
    password: "129BWop67",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

  function login(email, password) {
    if (FAKE_USER.email === email && FAKE_USER.password === password) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      console.log("Invalid login attempt");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
