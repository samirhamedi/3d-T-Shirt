import CanvasModel from "./canvas";
import Customizer from "./pages/customizer";
import Home from "./pages/home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
}

export default App;
