import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as PlaylistActions from '../../actions/playlist';
import VideoThumbnail from '../VideoThumbnail';

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
        }
    };
}

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.playVideo = this.playVideo.bind(this);
    }
    
    playVideo(video){
        this.props.playVideo(video)
    }
    renderVideoThumbnail(video){
        return (
                <VideoThumbnail video={video} onClick={this.playVideo}/>
        );
    }
    render() {
        if(this.props.playlist && this.props.playlist.length){
            return (
                <div>
                    {this.props.playlist.map(this.renderVideoThumbnail.bind(this))}
                </div>
            );
        } else {
            return "Your playlist is empty";
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);