import React, { Component } from 'react';
import style from './Loading.css';
class Loading extends Component {
    render() {
        return (
            <div className={style[this.props.size || 'md']}>
                Loading
            </div>
        );
    }
}

export default Loading;