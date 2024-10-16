import React from 'react';
import './Header.css'
import logo from "../../assets/logo.svg"
import Union from "../../assets/лупа.png"
import Group7 from "../../assets/Group 7.svg"

const Header = () => {
    return (
        <div className="header">
            <div className='container'>
                <div className="header-nav">
                    <div className="header-nav1">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="header-nav2">
                        <a className='header-nav-a' href="">КОМПАНИЯ</a>
                        <a className='header-nav-a' href="">КАТАЛОГ</a>
                        <a className='header-nav-a' href="">УСЛУГИ</a>
                        <a className='header-nav-a' href="">ИНФОРМАЦИЯ</a>
                        <a className='header-nav-a' href="">КОНТАКТЫ</a>
                        <button className='header-nav-btn'>ЗАКАЗАТЬ ЗВОНОК</button>
                    </div>

                    <div className="header-nav3">
                        <img src={Union} alt=""/>
                        <img src={Group7} alt=""/>
                        <div className='nakomipel'>0</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;