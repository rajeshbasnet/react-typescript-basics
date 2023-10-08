import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  /**
   * @heading TYPESCRIPT ASSERTION
   *
   * @detail We are lying to typescript saying, the emtpy object here is
   * of type AuthUser. This will remove any "?" operators that checks if
   * value is null or not because we are specifying the object {} we mentioned
   * in useState({}) always has AuthUser value.
   *
   */
  const [userType, setUserType] = useState<AuthUser>({} as AuthUser);

  function test() {
    console.log(userType.name); // Here, we don't need to add "?" operator
  }

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
