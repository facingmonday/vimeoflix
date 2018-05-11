import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as PlaylistActions from '../../actions/playlist';
function mapStateToProps(state) {
    return {
        playlist: state.playlist
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
        this.props.addToPlaylist(this.props.video);
        this.props.history.push("/")
    }
    render() {
        console.log('AddToPlaylist.props', this.props);
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>Add to Playlist</button>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddToPlaylist));