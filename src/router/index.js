import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';

//匹配所有router
import Register from '../pages/register/index';
import Login from '../pages/login/index'

export default class Hello extends Component{
    render(){
        return (
            <div className="App">
                <Route exact path="/" component={Register} />
                <Route path="/Register" component={Register} />
                <Route path="/Login" component={Login} />
            </div>
        )
    }
}