import React, {Component} from 'react';
//import styles
import { Button } from 'react-weui';
import './buyHome.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="homeTop">
                    <Button className='homeTop-button'>免费使用</Button>
                </div>
                <div>
                    <HomeList/>
                </div>

            </div>
        );
    }
}
class HomeList extends Component {
    render() {
        return (
            <ul className="home-list">
                <li>
                    <div className="home-list-top">
                        <p><img src={require('../images/home-daipeihuo.png')} alt="" className="home-list-top-img"/>
                            <span>我是卖家</span><img src={require("../images/xiajiantou.png")} alt="" className="xiajiantou"/>
                        </p>
                        <span>更多 </span><img src={require("../images/youjiantou.png")} alt="" className="youjiantou"/>
                    </div>
                    <div className="home-list-middle">
                        <p>
                            <img src="" alt=""/>
                            <span></span>
                        </p>
                        <p>
                            <img src="" alt=""/>
                            <span></span>
                        </p>
                        <p>
                            <img src="" alt=""/>
                            <span></span>
                        </p>
                        <p>
                            <img src="" alt=""/>
                            <span></span>
                        </p>
                    </div>
                </li>
                <li>
                    <div className="home-list-top">
                        <p><img src={require('../images/home-daishouhuo.png')} alt="" className="home-list-top-img"/>
                            <span>我是买家</span><img src={require("../images/xiajiantou.png")} alt="" className="xiajiantou"/>
                        </p>
                        <span>更多 </span><img src={require("../images/youjiantou.png")} alt="" className="youjiantou"/>
                    </div>

                </li>

            </ul>

        );
    }
}

export default App;
