import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VideoThumbnail from '../VideoThumbnail';
import * as VideoActions from '../../actions/video';
import style from './VideoList.css';
function mapStateToProps(state) {
    return {
        videoList: state.video.videoList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchVideos: (channelId)=>{
            dispatch(VideoActions.fetchVideos({channel: channelId}))
                .then((response) => {
                    !response.error 
                    ? dispatch(VideoActions.fetchVideosSuccess(response.payload.data))
                    : dispatch(VideoActions.fetchVideosFailure(response.error));
            });
        }
    };
}

class VideoList extends Component {
    constructor(props) {
        super(props);
        if(props.channel){
            this.props.fetchVideos(props.channel);
        }
    }
    renderVideo(video, index){
        return (
            <Link to={video.uri}>
                <VideoThumbnail video={video}/>
            </Link>
        );
    }
    render() {
        const { videos, loading, error } = this.props.videoList;
        if(loading){
            return "Loading";
        } else if(error){
            return "ERROR";
        } else if(videos && videos.length){
            return (
                <div className={style.videoListContainer}>
                    { videos.map(this.renderVideo.bind(this)) }
                </div>
            );
        } else return "No videos to list";
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList);