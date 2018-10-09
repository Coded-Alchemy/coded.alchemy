import React, {Component} from "react";
import {classify} from "../util/Utils";

export default class Button extends Component {

    render() {
        let Tag = this.props.href ? 'a' : 'button';
        let className = classify('btn', '${this.props.className || \'\'}') + (this.state.disabled ? ' disabled' : '');
        return (<Tag {...this.props} className={className}>Go to Google</Tag>);
    }
}