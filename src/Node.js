import React, { Component } from 'react';
import './Node.css';

class Node extends Component {
    render() {
        const {onClick, id, color} = this.props;
        const style = {backgroundColor: color};
        return <div id={id} className="game-node" style={style} onClick={onClick}></div>;
    }
}

export default Node;