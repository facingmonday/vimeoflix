import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthorizationReducer from './authorization';
import ChannelReducer from './channel';
import VideoReducer from './video';
import PlaylistReducer from './playlist';

const rootReducer = combineReducers({
    form: formReducer,
    authorization: AuthorizationReducer,
    channel: ChannelReducer,
    video: VideoReducer,
    playlist: PlaylistReducer
})

export default rootReducer;