import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as PlaylistActions from '../../actions/playlist';
import VideoThumbnail from '../VideoThumbnail';
import style from './Playlist.css';

function mapStateToProps(state) {
    return {
        playlist: state.playlist.playlist
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToPlaylist: (video)=>{
            dispatch(PlaylistActions.addToPlaylist(video));
        },
        playVideo: (video)=>{
            dispatch(PlaylistActions.playVideo(video));
        },
        clearPlaylist: ()=>{
            dispatch(PlaylistActions.clearPlaylist());
        }
    };
}

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.playVideo = this.playVideo.bind(this);
        this.renderPlaylistControls = this.renderPlaylistControls.bind(this);
    }
    
    playVideo(video){
        this.props.playVideo(video)
    }
    renderVideoThumbnail(video){
        return (
                <VideoThumbnail video={video} onClick={this.playVideo}/>
        );
    }
    renderPlaylistControls(){
        return (
            <div className={style.playlistControls}>
                <a onClick={this.props.clearPlaylist}>clear</a>
            </div>
        )
    }
    render() {
        if(this.props.playlist && this.props.playlist.length){
            return (
                <div className={style.playlist}>
                    {this.renderPlaylistControls()}
                    {this.props.playlist.map(this.renderVideoThumbnail.bind(this))}
                </div>
            );
        } else {
            return (<p className={style.empty}>Your playlist is empty</p>);
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);