import { 
    FETCH_CHANNELS, FETCH_CHANNELS_SUCCESS, FETCH_CHANNELS_FAILURE, FETCH_CHANNELS_LOADING, RESET_CHANNELS,
    FETCH_CHANNEL, FETCH_CHANNEL_SUCCESS, FETCH_CHANNEL_FAILURE, FETCH_CHANNEL_LOADING, RESET_ACTIVE_CHANNEL,
    CREATE_CHANNEL, CREATE_CHANNEL_SUCCESS, CREATE_CHANNEL_FAILURE, RESET_NEW_CHANNEL,
    UPDATE_CHANNEL, UPDATE_CHANNEL_SUCCESS, UPDATE_CHANNEL_FAILURE,
    DELETE_CHANNEL, DELETE_CHANNEL_SUCCESS, DELETE_CHANNEL_FAILURE, RESET_DELETED_CHANNEL
  } from '../actionTypes/channel';
  
  const initialState = {
      channelList: {
        channels: [],
        error: null,
        loading: false
      },
      activeChannel: {
        channel:null,
        error: null,
        loading: false
      },
      newChannel: {
        channel: null,
        error: null,
        loading: false
      },
      deleteChannel: {
        channel: null,
        error: null,
        loading: false
      }
  };
  
  export default (state = initialState, action) => {
      let error;
      switch (action.type) {
  
        case FETCH_CHANNELS:// start fetching posts and set loading = true
          return { ...state, channelList: {channels:[], error: null, loading: true} }; 
        case FETCH_CHANNELS_LOADING:
          return { ...state, channelList: {channels:[], error: null, loading: true} }; 
        case FETCH_CHANNELS_SUCCESS:// return list of posts and make loading = false
          return { ...state, channelList: { channels: action.payload.data, ...action.payload, error:null, loading: false} };
        case FETCH_CHANNELS_FAILURE:// return error and make loading = false
          error = action.payload || {message: action.payload.message};
          return { ...state, channelList: {channels: [], error: error, loading: false} };
        case RESET_CHANNELS:// reset postList to initial state
          return { ...state, channelList: {channels: [], error:null, loading: false} };
  
        case FETCH_CHANNEL:
          return { ...state, activeChannel:{...state.activeChannel, loading: true}};
        case FETCH_CHANNEL_LOADING:
          return { ...state, activeChannel:{...state.activeChannel, loading: true}};
        case FETCH_CHANNEL_SUCCESS:
          return { ...state, activeChannel: {channel: action.payload, error:null, loading: false}};
        case FETCH_CHANNEL_FAILURE:
          error = action.payload || {message: action.payload.message};
          return { ...state, activeChannel: {channel: null, error:error, loading:false}};
        case RESET_ACTIVE_CHANNEL:
          return { ...state, activeChannel: {channel: null, error:null, loading: false}};
        
        default:
          return state;
      }
    }
  
    