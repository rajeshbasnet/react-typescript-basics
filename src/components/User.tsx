import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.classList);

    setUser((prev) => ({
      ...prev,
      name: "Rajesh",
      email: "Basnet",
    }));
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button className="login" onClick={handleLogin}>
        Login
      </button>
      <button onClick={handleLogout}>Logout</button>
      <p>User name is {user?.name || "Please Login"}</p>
      <p>User email is {user?.email || "Please Login"}</p>
    </div>
  );
};
