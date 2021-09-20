import EditResume from "./components/EditResume";
import Menu from "./components/Menu";
import Resume from "./components/Resume";
import { StateProvider } from "./context/StateContext";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Menu />
        <Resume />
        <EditResume />
      </StateProvider>
    </div>
  );
}

export default App;
