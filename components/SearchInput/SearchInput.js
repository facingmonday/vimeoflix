import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import * as Actions from '../../actions/channel';
import styles from './SearchInput.css';

//Constants
const PLACEHOLDER_TEXT = "Search for channels";

class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    
    onChange(e){
        let value = e.currentTarget.value;
        this.setState({
            value: value
        });
    }
    onKeyUp(e){
        if (e.key === 'Enter' && this.props.fetchChannels) {
            this.props.fetchChannels(this.state.value);
            this.setState({value: ""});
            window.location.hash="#";
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <input 
                    type="text" 
                    onChange={this.onChange.bind(this)} 
                    onKeyUp={this.onKeyUp.bind(this)} 
                    value={this.state.value}
                    placeholder={PLACEHOLDER_TEXT}    
                />
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchChannels: (query = "")=>{
            dispatch(Actions.fetchChannels({
                    query: query
                }))
                .then((response) => {
                    !response.error 
                    ? dispatch(Actions.fetchChannelsSuccess(response.payload.data))
                    : dispatch(Actions.fetchChannelsFailure(response.error));
              });
        } 
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);