import React from 'react';
import './App.css';
import routes from './routes';
import Header from './Components/Header/Header';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
    };
  }

  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <Header />
        {routes}
      </div>        
    );
  }
}

export default App;
