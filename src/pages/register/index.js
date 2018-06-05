import React, {Component} from 'react';
import './index.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: false, //切换手机跟邮箱
            number:"",//手机号
            mail:"",//邮箱
            verifyCode:"",//验证码
            password:"",//密码
            password1:""//确认密码
        }
        this.renderLogin = this.renderLogin.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.number = this.number.bind(this);
        this.verifyCode = this.verifyCode.bind(this);
        this.password = this.password.bind(this);
        this.password1 = this.password1.bind(this);
        this.submitRe = this.submitRe.bind(this);

    }

    changeLogin(){
        this.setState({
            current:!this.state.current
        })
    }

    number(e){
        let value = e.target.value;
        this.setState({number: value})
    }

    mail(e){
        let value = e.target.value;
        this.setState({mail: value})
    }


    verifyCode(e){
        let value = e.target.value;
        this.setState({verifyCode: value})
    }

    password(e){
        let value = e.target.value;
        this.setState({password: value})
    }

    password1(e){
        let value = e.target.value;
        this.setState({password1: value})
    }

    submitRe(){
        const data = {
            name:this.state.number,
            pass:this.state.verifyCode,
            password:this.state.password,
            password1:this.state.password1,
        }
        const str = JSON.stringify(data);
        console.log(str)
    }

    renderLogin() {
        if (this.state.current === false) {
            return (
                <div className="Register">
                    <div className="Register_header">
                        <div className="header_left">
                            账号注册
                        </div>
                        <div className="header_right">
                            <span onClick={this.changeLogin}>使用邮箱注册</span>
                        </div>
                    </div>
                    <div className="Register_main">
                        <div className="main_input">
                            <label htmlFor="">手机号</label>
                            <input type="text" placeholder="请输入您的手机号码" value={this.state.number || ''} onChange={this.number}/>
                        </div>
                        <div className="main_input">
                            <label htmlFor="">验证码</label>
                            <input type="text" placeholder="验证码" value={this.state.verifyCode || ''} onChange={this.verifyCode}/>
                        </div>
                        <div className="main_input">
                            <label htmlFor="">设置密码</label>
                            <input type="text" placeholder="请输入您的密码" value={this.state.password || ''} onChange={this.password}/>
                        </div>
                        <div className="main_input">
                            <label htmlFor="">确认密码</label>
                            <input type="text" placeholder="请确认您的密码" value={this.state.password1 || ''} onChange={this.password1}/>
                        </div>
                        <div className="main_input protocol">
                            <input type="checkbox" name="items" value=""/>
                            我已阅读并同意
                            <span>
                        《UStutor用户注册协议》
                    </span>
                        </div>
                        <div className="main_input Register_now">
                            <label htmlFor=""></label>
                            <input type="button" value='立即注册' onClick={this.submitRe}/>
                        </div>
                        <div className="main_input login_in">
                            <label htmlFor=""></label>
                            已有账号？<span>请登录</span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="Register">
                    <div className="Register_header">
                        <div className="header_left">
                            账号注册
                        </div>
                        <div className="header_right">
                        <span onClick={this.changeLogin}>
                            使用手机注册
                        </span>
                        </div>
                    </div>
                    <div className="Register_main">
                        <div className="main_input">
                            <label htmlFor="">邮箱</label>
                            <input type="text" placeholder="请输入您的邮箱账号" value={this.state.mail || ''} onChange={this.mail}/>
                        </div>
                        <div className="main_input">
                            <label htmlFor="">验证码</label>
                            <input type="text" placeholder="请输入您的验证码"  value={this.state.verifyCode || ''} onChange={this.verifyCode}/>
                        </div>
                        <div className="main_input">
                            <label htmlFor="">设置密码</label>
                            <input type="text" placeholder="请设置您的密码" value={this.state.password || ''} onChange={this.password}/>
                        </div>
                        <div className="main_input">
                            <label htmlFor="">确认密码</label>
                            <input type="text" placeholder="请确认您的密码" value={this.state.password1 || ''} onChange={this.password1}/>
                        </div>
                        <div className="main_input protocol">
                            <input type="checkbox" name="items" value=""/>
                            我已阅读并同意
                            <span>
                        《UStutor用户注册协议》
                    </span>
                        </div>
                        <div className="main_input Register_now">
                            <label htmlFor=""></label>
                            <input type="button" value='立即注册'/>
                        </div>
                        <div className="main_input login_in">
                            <label htmlFor=""></label>
                            已有账号？<span>请登录</span>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
                this.renderLogin()
        );
    }
}

export default Register;