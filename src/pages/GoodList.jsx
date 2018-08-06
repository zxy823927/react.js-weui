import React, {Component} from 'react';
import './Home.css';
import BottomBar from '../components/BottomBar.jsx';

class GoodList extends Component {
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

                        菜品列表
                    </div>
                    <ul>
                      <li>白菜</li>
                    </ul>
                </div>

                <BottomBar/>
            </div>
        );
    }
}


export default GoodList;
