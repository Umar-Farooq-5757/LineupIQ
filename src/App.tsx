import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Pitch from "./components/Pitch";
import { Dialog } from "./components/ui/dialog";
import data from './data/matches/ucl-2015-final'

function App() {
  return (
    <Dialog>
    <main className="bg-black min-h-screen text-white">
      <Header />
      <About/>
      <Pitch players={data.pitch.players}/>
    </main></Dialog>
  );
}

export default App;
