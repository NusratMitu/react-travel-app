
import './App.css';
import Blog from './Components/Blog/Blog';
import AboutAuthor from './Components/AboutAuthor/AboutAuthor';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Home></Home>
    <AboutAuthor></AboutAuthor>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </div>
  );
}

export default App;
