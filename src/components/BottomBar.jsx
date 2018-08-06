import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../pages/Home.css';

class BottomBar extends Component {
    render() {
        return (
            <div>

                <nav className='main-menu'>
                    <NavLink to='/home' activeStyle={{color: '#f4629b'}}>
                        <img src={require('../images/daijiedan.png')}  alt=""/>
                        <p>首页</p>
                    </NavLink>
                    <NavLink to='/goodList' activeStyle={{color: '#f4629b'}}>
                        <img src={require('../images/daijiedan.png')}  alt=""/>
                        <p>菜品</p>
                    </NavLink>
                    <NavLink to='/ShoppingCart' activeStyle={{color: '#f4629b'}}>
                        <img src={require('../images/daijiedan.png')}  alt=""/>
                        <p>购物车</p>
                    </NavLink>
                    <NavLink to='/myHome' activeStyle={{color: '#f4629b'}}>
                        <img src={require('../images/daijiedan.png')}  alt=""/>
                        <p>我的</p>
                    </NavLink>
                </nav>
            </div>
        );
    }
}


export default BottomBar;
