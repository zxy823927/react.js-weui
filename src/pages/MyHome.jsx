import React, {Component} from 'react';
import './Home.css';
import BottomBar from '../components/BottomBar.jsx';

class MyHome extends Component {

    goDetail = () => {
        this.props.history.push('/home');
        // console.log(this)
        // console.log('点击登录')
    }

    render() {
        return (
            <div className="MyHome">
                <div className="my-home-top">
                    <div className="my-home-logo">
                        <img src={require('../images/header-logo.jpg')} alt="" className="logo"/>
                        <div className="name-right">
                            <p>
                                温柔累了
                            </p>
                            <p><span className="level">普通用户</span></p>
                        </div>
                    </div>
                    <ul className="my-home-list">
                        <li onClick={this.goDetail}>
                            <p>我的订单</p>
                            <img src={require('../images/youjiantou.png')} alt=""/>
                            
                        </li>
                        <li onClick={this.goDetail}>
                           <p> 我的余额</p>
                            <span className="yu">0.4</span>
                           < img src={require('../images/youjiantou.png')} alt=""/>
                        </li>
                        <li onClick={this.goDetail}>
                            <p>我的红包</p>
                            <img src={require('../images/youjiantou.png')} alt=""/>
                        </li>
                        <li onClick={this.goDetail}>
                            <p>我的商品券</p>
                            <img src={require('../images/youjiantou.png')} alt=""/>
                        </li>
                        <li onClick={this.goDetail}>
                            <p>我的地址</p>
                            <img src={require('../images/youjiantou.png')} alt=""/>
                        </li>
                        <li onClick={this.goDetail}>
                            <p>联系客服</p>
                            <img src={require('../images/youjiantou.png')} alt=""/>
                        </li>
                        <li onClick={this.goDetail}>
                            <p>意见反馈</p>
                            <img src={require('../images/youjiantou.png')} alt=""/>
                        </li>


                    </ul>
                </div>

                <BottomBar/>
            </div>
        );
    }
}


export default MyHome;
