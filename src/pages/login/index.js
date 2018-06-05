import React, {Component} from 'react';
import './index.css';
import HeaderMain from '../../components/header/index';
import arrow from '../../images/denglu_jiantou.png'

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login">
                <HeaderMain/>
                <div className="loginMain">
                    <div className="login-input">
                        <div className="login-input-head">
                            登录UStutor
                        </div>
                        <div className="login-input-main">
                            <input className="login-style login-phone" type="text" placeholder="请输入注册手机号码或邮箱地址"/>
                            <input className="login-style login-password" type="password" placeholder="请输入登录密码"/>
                            <div className="login-information">
                                <span>
                                    <input type="checkbox" name="items" value=""/>
                                    下次自动登录
                                </span>
                                <span>忘记密码？</span>
                            </div>
                            <div className="login-button">
                                <button>登录</button>
                            </div>
                            <div className="login-message">
                                立即注册，免费领取试听课
                                <img src={arrow} alt="arrow"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login