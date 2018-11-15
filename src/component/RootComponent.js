import React, {Component} from 'react';
import Header from "./Header";
import Jumbotron from "./Jumbotron";
import TicTacToeBoard from "./TicTacToeBoard";
import Footer from "./Footer";

export default class RootComponenet extends Component {
    render() {

        return (
            <div>
                <Header/>
                <Jumbotron className="-fluid text-xs-center" containerFluid={true}/>
                <TicTacToeBoard/>
                <Footer/>
            </div>
        )
    }
}