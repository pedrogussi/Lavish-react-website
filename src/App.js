
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
