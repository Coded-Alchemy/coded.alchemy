import React, {Component} from "react";
import {classify} from "../util/Utils";
import Container from "./Container";

export default class Jumbotron extends Component {

    componentWillMount() {
        this.state = {
            className: this.props.className || ''
        }
    }

    render() {
        const PROPS = Object.assign({}, this.props);
        const CSS_NAME = 'jumbotron';
        PROPS.className = classify(CSS_NAME, this.state.className);
        const containerFluid = PROPS.containerFluid;
        delete PROPS.containerFluid;
        const body = PROPS.className.includes(CSS_NAME + '-fluid') ?
            <Container fluid={containerFluid}>
                {PROPS.children}
            </Container> : PROPS.children;

        return (
            <div {...PROPS} onClick={() => {
                this.setState({
                    className: 'matt has much class',
                    awesomeProperty: 12
                })
            }}>
                <Container fluid={containerFluid}>
                    {body}
                </Container>

                {/*<p>Taji was here!</p>*/}
                {/*<Button className="-primary" href="https://google.com" target="_blank"/>*/}
            </div>
        )
    }

    // componentDidMount(){

    //     $.ajax('http://data.com').then((res)=>{res.json()})
    //     api.fetchData().then((data)=>{
    //        this.setState({serverData:data});
    //     });
    // }
}