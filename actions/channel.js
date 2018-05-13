import axios from 'axios';
import { VIMEO_ClIENT_ID, VIMEO_CLIENT_SECRET} from '../config';
import * as ActionTypes from '../actionTypes/channel';
import { getCookie, setCookie, deleteCookie } from '../utils/cookie';

export function fetchChannelsLoading() {
    return {
        type: ActionTypes.FETCH_CHANNELS_LOADING
    }
}

export function fetchChannelsSuccess(channels) {
    console.log('fetchChannelsSuccess response', channels);
    return {
        type: ActionTypes.FETCH_CHANNELS_SUCCESS,
        payload: channels
    }
}

export function fetchChannelsFailure(response) {
    console.log('fetchChannelsSuccess response', response);
    return {
        type: ActionTypes.FETCH_CHANNELS_FAILURE,
        payload: error
    }
}

export function fetchChannels(options = {}) {
    const params = {
        filter: options.filter || "",
        per_page: options.pageSize || 20,
        page: options.page || 1,
        query: options.query || null
    }
    const request = axios({
        method: 'get',
        url: `https://api.vimeo.com/channels`,
        headers: { Authorization: "bearer " + getCookie('token') },
        params: params
    });
    return {
        type: ActionTypes.FETCH_CHANNELS,
        payload: request
    };
}

export function fetchChannelLoading() {
    return {
        type: ActionTypes.FETCH_CHANNEL_LOADING
    }
}

export function fetchChannelSuccess(activeChannel) {
    return {
        type: ActionTypes.FETCH_CHANNEL_SUCCESS,
        payload: activeChannel
    }
}

export function fetchChannelFailure(error) {
    return {
        type: ActionTypes.FETCH_CHANNEL_SUCCESS,
        payload: error
    }
}

export function fetchChannel(channel_id) {
    const request = axios({
        method: 'get',
        url: `https://api.vimeo.com/channels/${channel_id}`,
        headers: { Authorization: "bearer " + getCookie('token') },
    });
    return {
        type: ActionTypes.FETCH_CHANNEL,
        payload: request
    };
}

export function resetActiveChannel() {
    return {
        type: ActionTypes.RESET_ACTIVE_CHANNEL
    }
}