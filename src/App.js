// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./page/Home/Home";

function App() {

  return (
    
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/home" component={Home} />


        <Route exact path="/" component={Home} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
