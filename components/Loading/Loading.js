import React, { Component } from 'react';
import style from './Loading.css';
class Loading extends Component {
    render() {
        return (
            <div>
                <div className={style.spinner}>
                    <div className={`${style.rect1} ${style.spinnerDiv}`}></div>
                    <div className={`${style.rect2} ${style.spinnerDiv}`}></div>
                    <div className={`${style.rect3} ${style.spinnerDiv}`}></div>
                    <div className={`${style.rect4} ${style.spinnerDiv}`}></div>
                    <div className={`${style.rect5} ${style.spinnerDiv}`}></div>
                </div>
            </div>
        );
    }
}

export default Loading;