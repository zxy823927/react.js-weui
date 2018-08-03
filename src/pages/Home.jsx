import React, {Component} from 'react';
import './Home.css';
import Header from '../components/Header.jsx';
import iScroll from 'iscroll'
import ReactIScroll from 'react-iscroll'

class Home extends Component {
    constructor(props) {
        super(props)

        let arr = [
            {id: 1, name: '热卖'},
            {id: 2, name: '会员专享'},
            {id: 3, name: '水果'},
            {id: 4, name: '蔬菜'},
            {id: 5, name: '肉蛋'},
            {id: 6, name: '肉蛋6'},
            {id: 7, name: '水产7'},
            {id: 8, name: '水产8'},
            {id: 9, name: '水产9'}];

        this.state = {
            arr: arr,
            addClass:1,
            iScrollOptions: {
                mouseWheel: true,
                scrollbars: false,
                scrollX: true,
                scrollY: false
            }
        };
        // this.navTab = this.navTab.bind(this);
    };

    //nav 的切換
    navTab(id,event){
        var that = this;

        // 点击按钮改变样式
        that.setState({
            addClass: id
        });

        console.log(id)

    }

    render() {
        const {iScrollOptions} = this.state;
        return (
            <div className="home">
                <div className="home-content">
                    <div className="homeTop">

                        <ReactIScroll iScroll={iScroll} options={iScrollOptions}>
                            {/*<div style={{width: "120%"}}>*/}

                                <ul className="nav">
                                    {
                                        this.state.arr.map((item,index) => {
                                            //第一种绑定多个class
                                            // return (<li key={item.id} className={ ['nav-list', this.state.addClass === item.id && 'is-active'].join(' ')}
                                            //            onClick={this.navTab.bind(this,item.id)}> {item.name}</li>)
                                            //第二种绑定多个class
                                            return (<li key={item.id} className={`nav-list  ${this.state.addClass === item.id ? 'is-active':''}` }
                                                        onClick={this.navTab.bind(this,item.id)}> {item.name}</li>)

                                        })

                                    }

                                </ul>
                            {/*</div>*/}

                        </ReactIScroll>


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


export default Home;
