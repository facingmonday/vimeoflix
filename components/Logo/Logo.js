import React, { Component } from 'react';
import pngLogo from './Logo.png';
import styles from './Logo.css';

class Logo extends Component {
    render() {
        return (
            <div className={styles.logoContainer}>
                <img src={pngLogo} />
            </div>
        );
    }
}

export default Logo;