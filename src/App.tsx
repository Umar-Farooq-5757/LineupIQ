import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Pitch from "./components/Pitch";
import { Dialog } from "./components/ui/dialog";

function App() {
  return (
    <Dialog>
    <main className="bg-black min-h-screen text-white">
      <Header />
      <About/>
      <Pitch/>
    </main></Dialog>
  );
}

export default App;
