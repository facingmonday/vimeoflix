import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PlaylistActions from '../../actions/playlist';
import style from './Button.css';
function mapStateToProps(state) {
    return {
        playlist: state.playlist
    };
}

function mapDispatchToProps(dispatch) {
    return {
        playNext: ()=>{
            dispatch(PlaylistActions.playNext());
        }
    };
}

class NextButton extends Component {
    onClick(e){
        e.preventDefault();
        this.props.playNext();
    }
    render() {
        return (
            <div>
                <a className={style.button} href="#" onClick={this.onClick.bind(this)}>Play Next</a>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextButton);