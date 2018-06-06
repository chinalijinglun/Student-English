import React, {Component} from 'react';
import './index.css';

class Center extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="right-side">
                    <div className="center-header">
                        <div className="center-header-left">
                            <img src="http://img5.imgtn.bdimg.com/it/u=1856167379,3898717282&fm=27&gp=0.jpg" alt=""/>
                        </div>
                        <div className="center-header-right">
                            <span>Alexander</span>
                            <span>学生ID：01120180903134</span>
                            <span>年龄：12岁</span>
                            <span>
                                剩余课时： 128 节  课时详情
                            </span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Center;