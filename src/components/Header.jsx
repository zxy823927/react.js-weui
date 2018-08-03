import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../pages/Home.css';

class mainPage extends Component {
    render() {
        return (
            <div >
                <nav className='main-menu'>
                    <NavLink to='/home' activeStyle={{color: '#f4629b'}}>首页</NavLink>
                    <NavLink to='/goodList' activeStyle={{color: '#f4629b'}}>菜品</NavLink>
                    <NavLink to='/ShoppingCart' activeStyle={{color: '#f4629b'}}>购物车</NavLink>
                    <NavLink to='/myHome' activeStyle={{color: '#f4629b'}}>我的</NavLink>
                </nav>


            </div>
        );
    }
}


export default mainPage;
