import React, {Component} from 'react';
import './Home.css';
import Header from '../components/Header.jsx';

class App extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-content">
                    <div className="homeTop">
                        {/*<Button className='homeTop-button'>免费使用</Button>*/}
                    </div>
                    <div className="home-middle">
                        <div>

                        </div>

                    </div>
                </div>
                <Header/>

            </div>
        );
    }
}


export default App;
