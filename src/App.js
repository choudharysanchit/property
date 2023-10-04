import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './App.css';

// Create components for different pages or sections of your app
import PhotoGallery from './components/property';
import About from './components/propertyquery';
// import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Your header content */}
        </header>
        {/* <h1>hello world hi</h1> */}

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PhotoGallery />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;

// export default App;
