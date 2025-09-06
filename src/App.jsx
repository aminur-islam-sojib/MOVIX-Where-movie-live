import "./App.css";
import { NavBar } from "./components/NavBar";
import { DisplayCard } from "./components/DisplayCard";
import { Api } from "./app/Api";

function App() {
  return (
    <>
      <NavBar />
      <DisplayCard />
      <Api />
    </>
  );
}

export default App;
