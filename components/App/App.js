import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Actions from '../../actions/authorization';
import * as PlaylistActions from '../../actions/playlist';
import * as VideoActions from '../../actions/video';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Loading from '../Loading';
import style from './App.css';
import '../../styles/index.css';

/**
 * Demo application showing how to use React, Redux, and CSS 
 * Modules to create a Vimeo client app.
 */
class App extends Component {
    /**
     * Fetch the authorization token then preload the staff pics channels
     * TODO(JMP) This is hacky. We can bootstrap better than this
     */
    componentWillMount(){
        const _this = this;
        this.props
            .fetchAuthorization()
            .then(()=>{
                return _this.props.fetchVideos(927);
            })
            .then(()=>{
                if(_this.props.videos && this.props.videos.length){
                    let first = _this.props.videos.shift();
                    this.props.playVideo(first);

                    if(_this.props.videos.length){
                        _this.props.videos.map(_this.props.addToPlaylist);
                    }
                }
            })
            
        ;
    }
    render() {
        const { authorization, loading, error } = this.props.authorization;
        return (
            <div>
                {(()=>{
                    if(loading){
                        return <Loading text={"Vimeo"} size={"xl"}/>
                    } else if(error){
                        return (
                            <div className={style.error}>
                                <h4>
                                    Oh no Vimeo! Something went wrong
                                </h4>
                                <p>{error}</p>
                            </div>
                        )
                    } else if(authorization){
                        return (
                            <div className={style.app}>
                                <Header />
                                <Main />
                            </div>
                        );
                    }
                })()}
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        authorization: state.authorization.activeAuthorization,
        videos: state.video.videoList.videos
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAuthorization: ()=>{
            return dispatch(Actions.fetchAuthorization())
                .then((response) => {
                    return !response.error 
                    ? dispatch(Actions.fetchAuthorizationSuccess(response.payload))
                    : dispatch(Actions.fetchAuthorizationFailure(response.error));
              });
        },
        fetchChannel: (channelId)=>{
            dispatch(ChannelActions.fetchChannel(channelId))
                .then((response) => {
                    !response.error 
                    ? dispatch(ChannelActions.fetchChannelSuccess(response.payload.data))
                    : dispatch(ChannelActions.fetchChannelFailure(response.error));
            });
        },
        fetchVideos: (channelId)=>{
            return dispatch(VideoActions.fetchVideos({channel: channelId}))
                .then((response) => {
                    return !response.error 
                    ? dispatch(VideoActions.fetchVideosSuccess(response.payload.data))
                    : dispatch(VideoActions.fetchVideosFailure(response.error));
            });
        },
        addToPlaylist: (video)=>{
            dispatch(PlaylistActions.addToPlaylist(video));
        },
        playVideo: (video)=>{
            dispatch(PlaylistActions.playVideo(video));
        }
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(App);