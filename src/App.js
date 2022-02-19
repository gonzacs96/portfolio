import "./App.css";
import Resume from "./components/Resume/Resume";
import Tools from "./components/Tools/Tools";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar/NavBar";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Resume />
      <Tools />
      <Experience />
      <Contact />
      {/* 
      <Projects />
       */}
    </div>
  );
}

export default App;
