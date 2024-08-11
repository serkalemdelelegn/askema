
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from '../src/components/home';
import AboutUs from './components/about/about';
import Header from './components/header';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Product from './components/product/product';
import Footer from './components/footer';
import Comment from './components/blog/comment';
import Founders from './components/about/founders';
import News from './components/news/news';
import NewsEdit from './components/admin/NewsEdit';
import SignIn from './components/admin/SigninPage';
import AddClientTestimonail from './components/admin/ClientTestimonail';
import NewsList from './components/admin/DisplayNews';
import TestimonialsList from './components/admin/DisplayClient';


function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contactus">
            <Contact />
          </Route>
          <Route exact path="/products">
            <Product />
          </Route>
          <Route exact path="/comment">
            <Comment/>
          </Route>
          <Route exact path="/founders">
            <Founders/>
          </Route>
          <Route exact path="/news">
            <News/>
          </Route>
          <Route exact path="/admin">
            <SignIn/>
          </Route>
          <Route exact path="/admin/news">
            <NewsEdit/>
          </Route>
          <Route exact path="/admin/addtestimonail">
            <AddClientTestimonail
            />
          </Route>
          <Route exact path="/admin/newsdisplay">
            <NewsList/>
          </Route>
          <Route exact path="/admin/clientdisplay">
            <TestimonialsList/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );

}

export default App;
