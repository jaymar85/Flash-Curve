import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
// import routes from "./routes";
import Header from './Components/Header/Header';

class App extends React.Component {
  
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
        </div>        
      </HashRouter>
    );
  }
}

export default App;
