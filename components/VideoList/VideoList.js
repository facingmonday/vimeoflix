import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VideoThumbnail from '../VideoThumbnail';
import Loading from '../Loading';
import * as VideoActions from '../../actions/video';
import style from './VideoList.css';

/**
 * List of video thumbnails.
 */
class VideoList extends Component {
    constructor(props) {
        super(props);
        if(props.channel){
            this.props.fetchVideos(props.channel);
        }
    }
    renderVideo(video, index){
        return (
            <Link key={video.uri} to={video.uri}>
                <VideoThumbnail video={video} />
            </Link>
        );
    }
    render() {
        const { videos, loading, error } = this.props.videoList;
        if(loading){
            return <Loading text={"Loading Videos for Channel"}/>;
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList);