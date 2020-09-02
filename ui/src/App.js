import React, { Component } from 'react';
import BookTable from './components/bookTable';
import NavBarCustom from './components/navBar';
import {BrowserRouter} from 'react-router-dom';
import Home from './components/home'

class App extends Component {
    state = {  }
    render() {        
        return (
            <BrowserRouter>
                <Home />
            </BrowserRouter> );
    }
}

//const App = appState => (<div className="App"> <h1>Hello World</h1> </div>);

export default App;

