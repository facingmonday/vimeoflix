import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

//Components
import VimeoPlayer from '../VimeoPlayer';
import Playlist from '../Playlist';
import ChannelDetails from '../ChannelDetails';
import ChannelList from '../ChannelList';
import VideoDetails from '../VideoDetails';

//Style
import style from './Main.css';


class Main extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.playerColumn}>
                    <div>
                        <VimeoPlayer />
                    </div>
                    <div>
                        <HashRouter>
                            <Switch>
                                <Route exact path='/videos/:id' component={VideoDetails}/>
                                <Route exact path='/channels/:id' component={ChannelDetails}/>
                                <Route exact path='/' component={ChannelList}/>
                            </Switch>
                        </HashRouter>
                    </div>
                </div>
                <div className={style.playlistColumn} >
                    <Playlist />
                </div>
            </div>
        );
    }
}

export default Main;