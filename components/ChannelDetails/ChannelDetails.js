import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as ChannelActions from '../../actions/channel';
import ChannelThumb from '../ChannelThumb';
import style from './ChannelDetails.css';
import VideoList from '../VideoList';


class ChannelDetails extends Component {
    componentWillMount(){
        const { match: { params } } = this.props;
        this.props.fetchChannel(params.id);
    }
    render() {
        const { match: { params }, channel: {channel, loading, error }} = this.props;
        if(loading){
            return "Loading";
        } else if(error){
            return "ERROR";
        } else if(channel){
            return (
                <div className={style.container}>
                    <div className={style.channelInfo}>
                        <div className={style.image}>
                            <img src={channel.pictures.sizes[0].link} />
                        </div>
                        <div className={style.details}>
                            <h4 className={style.name}>{channel.name}</h4>
                            <p className={style.description}>{channel.description}</p>
                        </div>
                    </div>
                    <div className={style.videoList}>
                        <VideoList channel={params.id} />
                    </div>
                </div>
            );
        } else {
            return "Channel details No Data"
        }
    }
}

const mapStateToProps = (state, ownProps)=> {
    return {
        channel: state.channel.activeChannel,
        videoList: state.channel.videoList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchChannel: (channelId)=>{
            dispatch(ChannelActions.fetchChannel(channelId))
                .then((response) => {
                    console.log('fetchChannel response', response);
                    !response.error 
                    ? dispatch(ChannelActions.fetchChannelSuccess(response.payload.data))
                    : dispatch(ChannelActions.fetchChannelFailure(response.error));
            });
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelDetails));