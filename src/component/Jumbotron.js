import React, {Component} from "react";
import {classify} from "../util/Utils";
import Container from "./Container";
// import Button from "./Button"

export default class Jumbotron extends Component {
    render() {
        const PROPS = Object.assign({}, this.props);
        const CSS_NAME = 'jumbotron';
        // eslint-disable-next-line
        PROPS.className = classify(CSS_NAME, '${this.props.className || \'\'}');
        const containerFluid = PROPS.containerFluid;
        delete PROPS.containerFluid;
        const body = PROPS.className.includes(CSS_NAME + '-fluid') ?
            <Container fluid={containerFluid}>
                {PROPS.children}
            </Container> : PROPS.children;

        return (
            <div>
                <Container fluid={containerFluid}>
                    {body}
                </Container>
                {/*<Button className="-primary" href="https://google.com" target="_blank" label="Click this shit yo!"/>*/}
            </div>
        )
    }
}