import LogInActionButton from "./components/LogInActionButton";
import Counter from "./components/counter/Counter";

function App() {
  return (
    <div
      style={{
        height: "40px",
        borderBottom: "1px solid grey",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <li>About</li>
        </ul>
        <LogInActionButton />
      </div>
      <Counter />
    </div>
  );
}

export default App;
