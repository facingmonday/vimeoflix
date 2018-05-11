import * as ActionTypes from '../actionTypes/playlist';

export function addToPlaylist(video){
    console.log('video', video);
  return {
    type: ActionTypes.ADD_TO_PLAYLIST,
    payload: video
  }
}

export function removeFromPlaylist(id){
  return {
    type: ActionTypes.REMOVE_FROM_PLAYLIST,
    payload: id
  }
}

export function clearPlaylist(){
  return {
    type: ActionTypes.CLEAR_PLAYLIST
  }
}

export function playNext(){
  return {
    type: ActionTypes.PLAY_NEXT
  }
}
export function playVideo(video){
    return {
        type: ActionTypes.PLAY_VIDEO,
        payload: video
    }
}