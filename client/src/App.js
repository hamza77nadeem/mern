import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Blog from './components/Blog';
import Post from './components/Post';
import Edit from './components/Edit';
import Home from './components/Home'
import Details from './components/Details';

// import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import {Switch,Route} from "react-router-dom"





function App() {
  return (
   <>
    <Navbaar />
    <Switch>
    <Route exact path="/admin" component={Dashboard} />
      <Route exact path="/blog" component={Blog} />
      
      <Route exact path="/" component={Home} />
      <Route exact path="/Post" component={Post} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />
    </Switch>
   {/* <Footer/> */}
   
   </>
  );
}

export default App;






