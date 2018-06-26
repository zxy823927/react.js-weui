import React, {Component} from 'react';
//import styles
import { Button } from 'react-weui';
import './Home.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="homeTop">
                    <Button className='homeTop-button'>免费使用</Button>
                </div>
                <div className="home-middle">
                   <div >
                       我是卖家
                   </div>
                    <div>
                        我是买家
                    </div>
                </div>

            </div>
        );
    }
}


export default App;
