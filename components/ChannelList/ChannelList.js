import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from '../../actions/channel';

import ChannelThumb from '../ChannelThumb';
import styles from './ChannelList.css';


class ChannelList extends Component {
    renderChannelThumb(channel, key){
        return <ChannelThumb {...channel.pictures.sizes[1]} uri={channel.uri} />
    }
    render() {
        console.log('this.props');
        const { channels, error, loading } = this.props.channelList;

        if(loading){
            return "Loading";
        } else if(error){
            return "Error";
        } else if(!channels.length){
            return "No data";
        } else if(channels.length){
            return (
                <div className={styles.channelListContainer}>
                    {channels.map(this.renderChannelThumb.bind(this))}
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state)=> {
    return {
        channelList: state.channel.channelList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));