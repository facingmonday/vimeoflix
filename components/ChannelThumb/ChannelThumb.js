import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChannelThumb extends Component {
    render() {
        return (
            <div>
                <Link to={`${this.props.uri}`} >
                    <img src={this.props.link} width={this.props.width} height={this.props.height} />
                    <p>{this.props.name}</p>
                </Link>
            </div>
        );
    }
}

export default ChannelThumb;