import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Player from '@vimeo/player';
import NextButton from '../Buttons/NextButton'
import style from './VimeoPlayer.css';

function mapStateToProps(state) {
    return {
        video: state.playlist.player.video
    };
}
class VimeoPlayer extends Component {
    
    onPlay(){

    }
    componentDidUpdate(){
        console.log('VimeoPlayer componentDidUpdate', this.props);
        if(!this.player){
            this.player = new Player('vimeo_player', {
                id: this.props.video.uri.split("/videos/")[1],
                width: 640
            });
        } else if(this.props.video){
            this.player.loadVideo(this.props.video.uri.split("/videos/")[1]);
        }
    }
    renderVideoDetails(video){
        return (
            <div className={style.videoFooter}>
                <div className={style.videoDetails}>
                    <h4>{video.name}</h4>
                    <p className={style.description}>{video.description}</p>
                </div>
                <div className={style.playerControls}>
                    <NextButton />
                </div>
            </div>
        )
    }
    render() {
        
        return (
            <div>
                {(!this.props.video)? "No Vid":null}
                <div id="vimeo_player"></div>
                {(this.props.video)? this.renderVideoDetails(this.props.video):null}
            </div>
        );
        
    }
}

export default connect(mapStateToProps,null)(VimeoPlayer);