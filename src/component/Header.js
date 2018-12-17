import React, {Component} from "react";
import logo from '../img/logo.svg';
import Button from "./Button";

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Coded Alchemy</h1>
                <h6>Taji Abdullah</h6>
                <Button label="Tic Tac Toe"/>
                <Button label="Blaster"/>
            </header>
        );
    }
}