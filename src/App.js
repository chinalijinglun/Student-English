import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Routers from './router/index';

class App extends Component {
    render() {
        return (
            <Router>
                <Routers></Routers>
            </Router>
        );
    }
}

export default App;
