
import './static/css/App.css';
import Header from "./components/Header"
import MainContainer from './components/home/MainContainer';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <br />
        <MainContainer/>
        <Footer/>
    </div>
  );
}

export default App;
