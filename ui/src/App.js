import React, { Component } from 'react';
import BookTable from './components/bookTable';
import NavBarCustom from './components/navBar';
import {Router} from 'react-router-dom';

class App extends Component {
    state = {  }
    render() {        
        return ( <Router>
            <div className='App'>
                    <NavBarCustom />
                    <BookTable />
        </div>
            </Router> );
    }
}

//const App = appState => (<div className="App"> <h1>Hello World</h1> </div>);

export default App;

