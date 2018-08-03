import React, {Component} from 'react';
import {HashRouter, Switch, Route, Redirect,} from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent.jsx';

import Login from "../pages/Login.jsx";

const Home = asyncComponent(() => import("../pages/Home.jsx"));
const MyHome = asyncComponent(() => import("../pages/MyHome.jsx"));
const ShoppingCart= asyncComponent(() => import("../pages/ShoppingCart.jsx"));
const GoodList= asyncComponent(() => import("../pages/GoodList.jsx"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/Login" exact component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/goodList" component={GoodList}/>
                    <Route path="/ShoppingCart" component={ShoppingCart}/>
                    <Route path="/myHome" component={MyHome}/>

                    <Redirect to="/"/>
                </Switch>
            </HashRouter>
        )
    }
}
