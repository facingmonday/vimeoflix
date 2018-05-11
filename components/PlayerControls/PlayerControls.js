import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PlaylistActions from '../../actions/playlist';

function mapStateToProps(state) {
    return {
        playlist: state.playlist.playlist,
        player: state.playlist.player
    };
}

function mapDispatchToProps(dispatch) {
    return {
        playNext: ()=>{
            dispatch(PlaylistActions.playNext());
        }
    };
}

class PlayerControls extends Component {
    onClickNext(evt){

    }
    onClickPrevious(evt){
        
    }
    render() {
        return (
            <div>
                <div className={styles.previousContainer}>
                    <a className={styles.previosButton}></a>
                </div>
                <div className={styles.nextContainer}>
                    <a onClick={this.onClickNext.bind(this)} className={styles.nextButton}></a>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerControls);