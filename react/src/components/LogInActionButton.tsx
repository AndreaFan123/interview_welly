import { useState } from "react";
import ConditionalRendering from "./ConditionalRendering";

const LogInActionButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      {isLoggedIn ? <p>Hello, welcome back</p> : <p>Please log in</p>}
      <ConditionalRendering isLoggedIn={isLoggedIn} onLogIn={handleLogin} />
    </>
  );
};

export default LogInActionButton;
