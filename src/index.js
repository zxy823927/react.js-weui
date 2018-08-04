import React from 'react';

import ReactDOM from 'react-dom';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.css';
import Router from './router/';
import { AppContainer } from 'react-hot-loader';

import initReactFastclick from 'react-fastclick';
initReactFastclick(); //兼容onclick在手機上的点击事件
// import { browserHistory } from 'react-router'
// import {Provider} from 'react-redux'



const render = Component => {
    ReactDOM.render(
        //绑定redux、热加载
            <AppContainer>
                    <Component />
            </AppContainer>
                ,
        document.getElementById('root'),
    )
}

render(Router);

