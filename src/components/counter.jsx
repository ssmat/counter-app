import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className={this.getButtonClasses()}><b>+</b></button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className={this.getButtonClasses()} disabled={this.props.counter.value < 1}><b>-</b></button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 p-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    getButtonClasses() {
        let classes = "btn bnt-secondary btn-sm m-2 ";
        classes += (this.props.counter.value === 0) && "disabled";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;