import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
