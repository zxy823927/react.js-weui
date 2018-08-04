import React, {Component} from 'react';
import './Home.css';
import BottomBar from '../components/BottomBar.jsx';

class ShoppingCart extends Component {
    goDetail = () => {
        this.props.history.push('/home');
        // console.log(this)
        // console.log('点击登录')
    }

    render() {
        return (
            <div className="MyHome">
                <div className="my-home-top">
                    <div>

                        我的
                    </div>
                    <ul>
                        <li onClick={this.goDetail}>

                        </li>
                    </ul>
                </div>

                <BottomBar/>

            </div>
        );
    }
}


export default ShoppingCart;
