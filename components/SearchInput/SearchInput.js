import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from '../../actions/channel';
import styles from './SearchInput.css';

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
            //this.props.history.push(`/channels`);
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
                    placeholder={"Search for channels"}    
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
                    console.log('response', response);
                    !response.error 
                    ? dispatch(Actions.fetchChannelsSuccess(response.payload.data))
                    : dispatch(Actions.fetchChannelsFailure(response.error));
              });
        } 
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);