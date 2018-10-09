import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Jumbotron/>
                <Footer/>
            </div>
        );
    }
}

export default App;
