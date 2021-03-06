import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Player from '@vimeo/player';
import NextButton from '../Buttons/NextButton'
import * as PlaylistActions from '../../actions/playlist';
import Loading from '../Loading';
import style from './VimeoPlayer.css';

/**
 * React implementation of a vimeo player.
 */
class VimeoPlayer extends Component {
    constructor(props) {
        super(props);
        this.autoplay = false;
        this.onEnded = this.onEnded.bind(this);
    }
    
    onPlay(){

    }
    onEnded(){
        this.autoplay = true;
        this.props.playNext();
    }
    /**
     * When the props are updated for the component.
     * If the player had not been setup, do that, then
     * load the video passed in with props.
     */
    componentDidUpdate(){
        const { video, loading, error} = this.props.playerModel;
        if(!this.player){
            this.player = new Player('vimeo_player', {
                id: video.uri.split("/videos/")[1],
                width: 640
            });

            this.player.on('ended', this.onEnded);
        } else if(video){
            this.player.loadVideo(video.uri.split("/videos/")[1]);
            if(this.autoplay){
                setTimeout(()=>{
                    this.player.play();
                }, 1000);
                
            }
        }
        
    }
    renderVideoDetails(video){
        return (
            <div className={style.videoFooter}>
                <h4 className={style.name}>{video.name}</h4>
                <p className={style.description}>{video.description}</p>
            </div>
        )
    }
    render() {
        const { video, loading, error} = this.props.playerModel;
        return (
            <div>
                {(loading)?(<div className={style.loading}><Loading /></div>): null}
                <div className={style.vimeo_player} id="vimeo_player"></div>
                {(video)? this.renderVideoDetails(video):null}
            </div>
        );
        
    }
}


function mapStateToProps(state) {
    return {
        playerModel: state.playlist.player
    };
}

function mapDispatchToProps(dispatch) {
    return {
        playNext: ()=>{
            dispatch(PlaylistActions.playNext());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VimeoPlayer);