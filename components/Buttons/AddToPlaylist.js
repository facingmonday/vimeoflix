import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as PlaylistActions from '../../actions/playlist';
import style from './Button.css';

function mapStateToProps(state) {
    return {
        playlist: state.playlist.playlist
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToPlaylist: (video)=>{
            dispatch(PlaylistActions.addToPlaylist(video));
        }
    };
}

class AddToPlaylist extends Component {
    onClick(e){
        if(this.props.video){
            this.props.addToPlaylist(this.props.video);
        }
        this.props.history.push("/")
    }
    render() {
        return (
            <div className={style.container}>
                <a className={style.button} onClick={this.onClick.bind(this)}>Add to Playlist</a>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToPlaylist));