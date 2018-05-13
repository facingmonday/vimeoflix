import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Player from '@vimeo/player';
import NextButton from '../Buttons/NextButton'
import * as PlaylistActions from '../../actions/playlist';
import Loading from '../Loading';
import style from './VimeoPlayer.css';

function mapStateToProps(state) {
    return {
        playlist: state.playlist.playlist,
        playerModel: state.playlist.player
    };
}

function mapDispatchToProps(dispatch) {
    return {
        playNext: ()=>{
            console.log('PlaylistActions.playNext',PlaylistActions.playNext);
            dispatch(PlaylistActions.playNext());
        }
    };
}

class VimeoPlayer extends Component {
    constructor(props) {
        super(props);
        this.autoplay = false;
        this.onEnded = this.onEnded.bind(this);
    }
    
    onPlay(){

    }
    onEnded(){
        console.log('onEnded', this);
        this.autoplay = true;
        this.props.playNext();
    }
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
                {(!video)?(<div className={style.loading}><Loading /></div>): null}
                <div className={style.vimeo_player} id="vimeo_player"></div>
                {(video)? this.renderVideoDetails(video):null}
            </div>
        );
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VimeoPlayer);