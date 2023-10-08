import "./App.css";
import { Greet } from "./components/Greet";

function App() {
  return (
    <>
      <Greet name="Rajesh" messageCount={10} isLoggedIn={false} />
    </>
  );
}

export default App;
