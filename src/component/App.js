import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from "./Footer";
import TicTacToeBoard from "./TicTacToeBoard";
import * as Const from "../util/Const";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayState: Const.TIC_TAC_TOE,
        };
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                {this.renderTicTacToe()}
                {this.renderFooter()}
            </div>
        );
    }

    renderTicTacToe() {
        if (this.state.displayState === Const.TIC_TAC_TOE) {
            return (<TicTacToeBoard value={this.state.displayState}/>);
        }
        return null;
    }

    renderHeader() {
        return (<Header value={this.state.displayState}/>);
    }

    renderFooter() {
        return (<Footer value={this.state.displayState}/>);
    }
}