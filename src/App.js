import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [isToggled, setToggle] = useState("none");

  const navRef = useRef();

  function togglePanel() {
    if (navRef.current.style.display === "none") {
      setToggle("block");
    } else {
      setToggle("none");
    }
  }

  return (
    <div className="App">
      <header>
        <a>Home Page</a>
        <div>
          <button onClick={togglePanel}>Dropdown</button>
          <nav style={{ display: isToggled }} ref={navRef}>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#tech-stack">Tech Stack</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#feedback">Feedback</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
