import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from '../../actions/channel';
import Loading from '../Loading';
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
            return (
                <div>
                    <Loading />
                </div>
            );
        } else if(error){
            return (
                <div>
                    <Loading />
                </div>
            );
        } else if(!channels.length){
            return (
                <div>
                    <p className={styles.noResults}>No search results to display</p>
                </div>
            );
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