import "./App.css";
import Header from "./common/Header";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Services from './components/Services';
import Work from './components/Work';
import Footer from './common/Footer';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
function App() {
  return (
     <div className="App">
      <Header />
      <Login/>
      <Signup/>
      {/* <Home/>
      <About/>
      <Services/>
      <Blog/>
      <Work/>
      <Contact/>
      <Footer/> */}
     </div>
   
  );
}

export default App;
