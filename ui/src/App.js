import React, { Component } from 'react';
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

export default App;

