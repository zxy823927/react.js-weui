import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../pages/Home.css';

class mainPage extends Component {
    render() {
        return (
            <div >
                <nav className='main-menu'>
                    <NavLink to='/home' activeStyle={{color: 'red'}}>首页</NavLink>
                    <NavLink to='/events' activeStyle={{color: 'red'}}>菜品</NavLink>
                    <NavLink to='/ShoppingCart' activeStyle={{color: 'red'}}>购物车</NavLink>
                    <NavLink to='/myHome' activeStyle={{color: 'red'}}>我的</NavLink>
                </nav>


            </div>
        );
    }
}


export default mainPage;
