import React, {Component} from 'react';
import './Home.css';
import Header from '../components/Header.jsx';

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

                        我的
                    </div>
                    <ul>
                        <li onClick={this.goDetail}>

                        </li>
                    </ul>
                </div>

                <Header/>
            </div>
        );
    }
}


export default GoodList;
