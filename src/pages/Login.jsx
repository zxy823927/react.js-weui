import React, {Component} from 'react';
import './Home.css';

class Login extends Component {
    LoginBtn = () => {
        this.props.history.push('/home');
        console.log(this)
        console.log('点击登录')
    }

    render() {
        return (
            <div className="login">
                <div className="login-mask">

                    <div className="login-center">
                        <div className="login-top">
                            <p><span className="one"></span><span className="two">我是买家</span></p>
                            <p><span className="one"></span><span className="two">我是卖家</span></p>
                        </div>
                        <input type="number" className="login-input" placeholder="请输入用户名"/>


                        <input type="number" className="login-input" placeholder="请输入密码"/>

                        <div className="login-btn" onClick={this.LoginBtn}>
                            登录
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default Login;
