import { 
    FETCH_VIDEOS, FETCH_VIDEOS_SUCCESS, FETCH_VIDEOS_FAILURE, FETCH_VIDEOS_LOADING, RESET_VIDEOS,
    FETCH_VIDEO, FETCH_VIDEO_SUCCESS, FETCH_VIDEO_FAILURE, FETCH_VIDEO_LOADING, RESET_ACTIVE_VIDEO
  } from '../actionTypes/video';
  
  const initialState = {
      videoList: {
        videos: [],
        error: null,
        loading: false
      },
      activeVideo: {
        video:null,
        error: null,
        loading: false
      }
  };
  
  export default (state = initialState, action) => {
      let error;
      switch (action.type) {
  
        case FETCH_VIDEOS:// start fetching posts and set loading = true
          return { ...state, videoList: {videos:[], error: null, loading: true} }; 
        case FETCH_VIDEOS_LOADING:
          return { ...state, videoList: {videos:[], error: null, loading: true} }; 
        case FETCH_VIDEOS_SUCCESS:// return list of posts and make loading = false
          return { ...state, videoList: { videos: action.payload.data, ...action.payload, error:null, loading: false} };
        case FETCH_VIDEOS_FAILURE:// return error and make loading = false
          error = action.payload || {message: action.payload.message};
          return { ...state, videoList: {videos: [], error: error, loading: false} };
        case RESET_VIDEOS:// reset postList to initial state
          return { ...state, videoList: {videos: [], error:null, loading: false} };
  
        case FETCH_VIDEO:
          return { ...state, activeVideo:{...state.activeVideo, loading: true}};
        case FETCH_VIDEO_LOADING:
          return { ...state, activeVideo:{...state.activeVideo, loading: true}};
        case FETCH_VIDEO_SUCCESS:
          return { ...state, activeVideo: {video: action.payload, error:null, loading: false}};
        case FETCH_VIDEO_FAILURE:
          error = action.payload || {message: action.payload.message};
          return { ...state, activeVideo: {video: null, error:error, loading:false}};
        case RESET_ACTIVE_VIDEO:
          return { ...state, activeVideo: {video: null, error:null, loading: false}};
        default:
          return state;
      }
    }
  
    