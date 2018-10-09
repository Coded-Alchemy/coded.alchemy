import React, {Component} from "react";

export default class Container extends Component {
    render() {
        const className = `container${this.props.fluid ? '-fluid' : ''} ${this.props.className || ''}`;
        const style = this.props.style;

        return (
            <div className={className} style={style}>
                {this.props.children}
            </div>
        )
    }
}