import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './index.css';

class Left extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const leftList =[
            {
              name:"课程表",
              path:"/Center"
            },
            {
                name:"课前预习",
                path:"Center1"
            },
            {
                name:"课后作业",
                path:"/center2"
            },
            {
                name:"我的课程",
                path:"/center3"
            },
            {
                name:"我的订单",
                path:"/center4"
            },
            {
                name:"成长报告",
                path:"/center5"
            }
        ];
        return (
            <div className="left-side">
                <ul>
                    {
                        leftList.map(function (list, index) {
                            // var iii = index+1;
                            return (<li key={index}>
                            <span>
                         <img src={require(`../../images/left${index + 1}.png`)} alt="list"/>
                            </span>
                                <Link to={`${list.path}`}>{list.name}</Link>
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Left