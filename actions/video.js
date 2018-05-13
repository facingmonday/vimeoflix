import axios from 'axios';
import * as ActionTypes from '../actionTypes/video';
import { getCookie, setCookie, deleteCookie } from '../utils/cookie';

export function fetchVideosLoading() {
  return {
    type: ActionTypes.FETCH_VIDEOS_LOADING
  }
}

export function fetchVideosSuccess(videos) {
  return {
    type: ActionTypes.FETCH_VIDEOS_SUCCESS,
    payload: videos
  }
}

export function fetchVideosFailure(error) {
  return {
    type: ActionTypes.FETCH_VIDEOS_SUCCESS,
    payload: error
  }
}

export function fetchVideos(options = {}) {
  let url = `https://api.vimeo.com/videos`
  if (options.channel) {
    url = `https://api.vimeo.com/channels/${options.channel}/videos`
  }
  const request = axios({
    method: 'get',
    url: url,
    headers: { Authorization: "bearer " + getCookie('token') },
  });
  return {
    type: ActionTypes.FETCH_VIDEOS,
    payload: request
  };
}

export function fetchVideoLoading() {
  return {
    type: ActionTypes.FETCH_VIDEO_LOADING
  }
}

export function fetchVideoSuccess(activeVideo) {
  console.log('activeVideo', activeVideo);
  return {
    type: ActionTypes.FETCH_VIDEO_SUCCESS,
    payload: activeVideo
  }
}

export function fetchVideoFailure(error) {
  return {
    type: ActionTypes.FETCH_VIDEO_SUCCESS,
    payload: error
  }
}

export function fetchVideo(id) {
  const request = axios({
    method: 'get',
    url: `https://api.vimeo.com/videos/${id}`,
    headers: { Authorization: "bearer " + getCookie('token') },
  });
  return {
    type: ActionTypes.FETCH_VIDEO,
    payload: request
  };
}

export function resetActiveVideo() {
  return {
    type: ActionTypes.RESET_ACTIVE_VIDEO
  }
}