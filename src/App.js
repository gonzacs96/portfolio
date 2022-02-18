import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume/Resume";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
