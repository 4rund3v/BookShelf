import React, { Component } from 'react';
import BookTable from './components/bookTable';

class App extends Component {
    state = {  }
    render() { 
        return ( <div className='App'>Hello World
        <BookTable />
        </div> );
    }
}
 
export default App;