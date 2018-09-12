import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <p className="App-intro">
                    Will this ever become anything, only time will tell...
                </p>
                <Footer/>
            </div>
        );
    }
}

export default App;
