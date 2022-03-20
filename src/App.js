import './App.css';
import Design from './components/Design/Design';
import Development from './components/Development/Development';
import Footer from './components/Footer/Footer';
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
      <Design />
      <Footer />
    </>
  );
}

export default App;
