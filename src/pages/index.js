import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './index.css';

import HeaderMain from '../components/header/index';
import Left from '../components/left/index';
import Center from '../pages/center/index';
import Center1 from '../pages/center/index1';

class MainPage extends Component {
    render() {
        return (
            <div className="allthings">
                <HeaderMain/>
                <div className="all-main">
                    <Left/>
                        <Route path={`/Center`} component={Center}/>
                    <Route path={`/Center1`} component={Center1}/>
                        {this.props.children}
                </div>
            </div>
        )
    }
}

export default MainPage;