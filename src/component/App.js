import React, {Component} from 'react';
import '../css/App.css';
import RootComponenet from "./RootComponent";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <RootComponenet/>
            </div>
        );
    }
}