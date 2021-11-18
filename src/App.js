import TopBar from "./components/topBar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Settings />
    </div>
  );
}

export default App;
