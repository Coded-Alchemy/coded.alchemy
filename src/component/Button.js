import React, {Component} from "react";
import {classify} from "../util/Utils";

export default class Button extends Component {

    render() {
        let Tag = this.props.href? 'a':'button';
        // eslint-disable-next-line
        let className = classify('btn', '${this.props.className || \'\'}') + ('${this.props.disabled || \'\'}');
        return (<Tag {...this.props} className={className}>{this.props.label || this.props.children}</Tag>);
    }
}