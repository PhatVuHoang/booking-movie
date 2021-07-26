// import logo from './logo.svg';
// import './App.css';

import { Router, Route, Switch } from "react-router-dom";
import FooterComponent from "./components/FooterComponent/FooterComponent";
// import HeaderComponent from "./components/Header/HeaderComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import Home from "./page/Home/Home";
import {createBrowserHistory} from 'history'
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import ModalComponent from "./HOC/Modal/ModalComponent";

export const history = createBrowserHistory();

function App() {

  return (
    
    <Router history={history}>
      <ModalComponent />
      <Switch>
        <HomeTemplate exact path="/home" component={Home} />

        <HomeTemplate exact path="/" component={Home} />
      </Switch>

    </Router>
  );
}

export default App;
