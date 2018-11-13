import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import TicTacToeBoard from "./TicTacToeBoard";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Jumbotron className="-fluid text-xs-center" containerFluid={true} />
                <TicTacToeBoard/>
                <Footer/>
            </div>
        );
    }
}