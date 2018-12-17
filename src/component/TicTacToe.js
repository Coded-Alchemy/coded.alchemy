import React, {Component} from "react";
import '../css/tictactoe.css';

import TicTacToeBoard from "./TicTacToeBoard"

class TicTacToe extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
