import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as Actions from '../../actions/channel';
import Loading from '../Loading';
import ChannelThumb from '../ChannelThumb';
import style from './ChannelList.css';


class ChannelList extends Component {
    renderChannelThumb(channel, key){
        return <ChannelThumb {...channel.pictures.sizes[1]} uri={channel.uri} />
    }
    renderChannelRow(channel, key){
        return (
            <div className={style.row} key={channel.uri}>
                <div className={style.image}>
                    <ChannelThumb {...channel.pictures.sizes[1]} uri={channel.uri} />
                </div>
                <div className={style.infoContainer}>
                    <h4 className={style.name}>{channel.name}</h4>
                    <p className={style.description}>{channel.description}</p>
                    <div className={style.controls}>
                        <Link className={style.detailsButton} to={`${channel.uri}`}>View Details</Link>
                    </div>
                </div>
            </div>
        );
    }
    render() {
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
                    {error}
                </div>
            );
        } else if(!channels.length){
            return (
                <div>
                    <p className={style.noResults}>No search results to display</p>
                </div>
            );
        } else if(channels.length){
            return (
                <div className={style.channelListContainer}>
                    {channels.map(this.renderChannelRow.bind(this))}
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