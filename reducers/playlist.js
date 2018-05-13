import { 
    ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST, CLEAR_PLAYLIST, PLAY_NEXT, PLAY_VIDEO
} from '../actionTypes/playlist';
  
const initialState = {
    playlist: [],
    player: {
        video: null,
        loading: null,
        error: null
    }
};

export default (state = initialState, action) => {
    let error;
    switch (action.type) {
        case ADD_TO_PLAYLIST:
            return {...state, playlist: state.playlist.concat(action.payload)};
            break;
        case REMOVE_FROM_PLAYLIST:
            return {...state, playlist: state.playlist.filter(video=>video.uri != action.payload)};
            break;
        case PLAY_NEXT:
            let video = state.playlist.slice(0,1)[0];
            return {
                ...state,
                playlist: state.playlist.filter(pv=>pv.uri != video.uri),
                player: {
                    ...state.player,
                    video: video
                }
            }
            break;
        case PLAY_VIDEO:
            return {
                playlist: state.playlist.filter(video=>video.uri != action.payload.uri), 
                player: {...state.player, video: action.payload}
            }
        case CLEAR_PLAYLIST:
            return {...state, playlist: []};
            break;
        default:
            return state;
    }
}