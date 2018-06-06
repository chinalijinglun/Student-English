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
                    <div className="center-main">
                        <ul>
                            <li><span>学生性别：</span><span>asd</span></li>
                            <li>学生邮箱：</li>
                            <li>出生日期：</li>
                            <li>所在学校：</li>
                            <li>所在年级：</li>
                            <li>家长姓名：</li>
                            <li>家长电话：</li>
                            <li>家长邮箱：</li>
                            <li>是否打算出国：</li>
                            <li>预计出国时间：</li>
                        </ul>
                    </div>
                </div>
        )
    }
}

export default Center;