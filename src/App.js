// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import FooterComponent from "./components/FooterComponent/FooterComponent";
// import HeaderComponent from "./components/Header/HeaderComponent";
import HeaderComponent from './components/Header/HeaderComponent'
import Home from "./page/Home/Home";

function App() {

  return (
    
    <BrowserRouter>
      {/* <HeaderComponent /> */}
      <HeaderComponent />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
      {/* <FooterComponent /> */}

    </BrowserRouter>
  );
}

export default App;
