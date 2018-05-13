import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as VideoActions from '../../actions/video';
import style from './VideoDetails.css';
import AddToPlaylist from '../Buttons/AddToPlaylist';

/**
 * Show the details for a video with an add to playlist button
 */
class VideoDetails extends Component {
    componentWillMount(){
        const { match: { params }} = this.props;
        this.props.fetchVideo(params.id)
    }
    render() {
        const { match: { params }, video: {video, loading, error }} = this.props;
        
        if(loading){
            return "Loading";
        } else if(error){
            return "ERROR";
        } else if(video){
            return (
                <div className={style.container}>
                    <div className={style.imageContainer}>
                        <img src={video.pictures.sizes[1].link} />
                    </div>
                    <div className={style.infoContainer}>
                        <h4>{video.name}</h4>
                        <p>{video.description}</p>
                        <div className={style.controls}>
                            <AddToPlaylist video={video} />
                            <a className={style.button} onClick={this.props.history.goBack}>Back to Channel</a>
                        </div>
                        
                    </div>
                </div>
            )
        } else {
            return "No Video to display"
        }

    }
}

function mapStateToProps(state) {
    return {
        video: state.video.activeVideo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchVideo: (id)=>{
            dispatch(VideoActions.fetchVideo(id))
                .then((response) => {
                    !response.error 
                    ? dispatch(VideoActions.fetchVideoSuccess(response.payload.data))
                    : dispatch(VideoActions.fetchVideoFailure(response.error));
            });
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoDetails));