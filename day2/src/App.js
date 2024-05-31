import logo from './logo.svg';
import './App.css';
import Header from './header';
import About from './about';
import Service from './services';
import Portfolio from './portfolio';
import  Blog from "./blog";
import Footer from "./footer"

function App() {
  return (
    <div >
      <Header/>
      <About/>
      <Service/>
      <Portfolio/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
