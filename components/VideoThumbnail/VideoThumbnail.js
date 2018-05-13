import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import styles from './VideoThumbnail.css';

class VideoThumbnail extends Component {
    constructor(props) {
        super(props);
    }
    onClick(evt){
        if(this.props.onClick){
            this.props.onClick(this.props.video);
        }
    }
    render() {
        const {video} = this.props;
        return (
            <div key={video.uri} onClick={this.onClick.bind(this)} className={styles.container} >
                <img src={video.pictures.sizes[1].link} />
            </div>
        );
    }
}

export default VideoThumbnail;