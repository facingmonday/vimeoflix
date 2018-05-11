import React, { Component } from 'react';
import Logo from '@/components/Logo';
import SearchInput from '@/components/SearchInput';
import style from './Header.css';

class Header extends Component {
    render() {
        return (
            <div className={style.container}>
                <Logo />
                <SearchInput />
            </div>
        );
    }
}

export default Header;