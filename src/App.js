import "./App.css";
import RecursiveMenu from "./components/RecursiveMenu";
import { Menus } from "./components/data";

function App() {
  return (
    <div className="App">
      <RecursiveMenu menus={Menus} />
    </div>
  );
}

export default App;
