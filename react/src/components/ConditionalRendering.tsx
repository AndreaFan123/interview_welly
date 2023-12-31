function ConditionalRendering({
  isLoggedIn,
  onLogIn,
}: {
  isLoggedIn: boolean;
  onLogIn: () => void;
}) {
  return (
    <>
      {isLoggedIn ? (
        <button onClick={onLogIn}>Log Out</button>
      ) : (
        <button onClick={onLogIn}>Log In</button>
      )}
    </>
  );
}

export default ConditionalRendering;
