
import './App.css';
import Blog from './Components/Blog/Blog';
import AboutAuthor from './Components/AboutAuthor/AboutAuthor';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
   
     
    
    <Router>
    <Header/>
  <Routes>
  
    {/* <Route exact path="/" element={<h1>Home Page</h1>} /> */}
    <Route exact path="/" element={<Home />} />
    <Route exact path="blog" element={<Blog />} />
    <Route exact path="aboutAuthor" element={<AboutAuthor />} />
    <Route exact path="contactUs" element={<ContactUs />} />
    <Route exact path="*" element={<NotFound />} />
  </Routes>
  <Footer/>
</Router>
    </div>
  );
}

export default App;
