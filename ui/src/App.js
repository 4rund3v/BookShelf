import React, { Component } from 'react';
import BookTable from './components/bookTable';

class App extends Component {
    state = {  }
    render() {        
        return ( <div className='App'>
                    Hello World 
                    <BookTable />
        </div> );
    }
}

//const App = appState => (<div className="App"> <h1>Hello World</h1> </div>);

export default App;

