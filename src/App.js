import './App.css';
import Development from './components/Development/Development';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Gallery />
      <Development />
    </>
  );
}

export default App;
