import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Navbar from './Navbar';
import Node from './Node';
import './GameField.css';

class GameField extends Component {
    constructor(props) {
        super(props);
        const colors = ["#F44336", "#F44336", "#9C27B0", "#9C27B0", "#2196F3", "#2196F3", "#00BCD4", "#00BCD4", "#4CAF50", "#4CAF50", "#CDDC39", "#CDDC39", "#E65100", "#E65100", "#795548", "#795548"]
        let nodes = [];
        for (let i = 0; i < 16; i++) {
            nodes[i] = {
                id: i,
                nodeState: 0, 
                backgroundColor: colors[i]
            }
        }
        nodes = shuffle(nodes);
        console.log(nodes);
        this.state = {
            nodes
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }  

    handleClick(e) {
        var ind;
        this.state.nodes.forEach((node, i) => {
            if (node.id == e.target.id)
                ind = i;
        });
        console.log(ind);
        if (this.state.nodes[ind].nodeState === 0) {
            var newNodes = this.state.nodes.slice();
            newNodes[ind].nodeState = 1;
            this.setState({newNodes}, () => {
                var showing = this.state.nodes.filter(node => node.nodeState === 1);
                if (showing.length === 2) {
                    if (showing[0].backgroundColor === showing[1].backgroundColor) {
                        showing.forEach(node => node.nodeState = 2);
                    }
                    else {
                        showing.forEach(node => node.nodeState = 0);
                    }
                    setTimeout(() => {
                        this.setState(newNodes);
                    }, 1000);
                }
            });
        }
    }

    handleRestart() {
        let nodes = this.state.nodes.map(node => ({
            ...node,
            nodeState: 0
        }));
        nodes = shuffle(nodes);
        this.setState({nodes});
    }

    render() {
        const nodes = this.state.nodes.map((node, ind) => {
            let color = node.nodeState === 0 ? "grey": node.backgroundColor;
            return <Node id={node.id} key={ind} color={color} onClick={this.handleClick}/>    
        });
        return (
            <div className="game-field">
                <Navbar onClick={this.handleRestart} />
                {nodes}
            </div>
        )
    }
}

export default GameField;