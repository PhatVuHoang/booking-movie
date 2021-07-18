// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import Home from "./page/Home/Home";

function App() {

  return (
    
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
