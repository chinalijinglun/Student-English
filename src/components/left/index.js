import React, {Component} from 'react';
import './index.css';

class Left extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const leftList = ['课程表',
            '课前预习',
            '课后作业',
            '我的课程',
            '我的订单',
            '成长报告']
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
                                {list}
                            </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Left