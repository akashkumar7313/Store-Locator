

import './App.css';
// import Footer from './components/Footer';
// import Navbar from "./components/Navbar";
import Search from './components/SearchField/Search';
import Cards from './components/Cards';

function App() {

  return (
    <div className="App">
      {/* <Navbar/> */}
      <Search/>
      <Cards/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
