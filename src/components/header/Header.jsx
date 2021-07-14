import React from 'react'
import './../../assets/Header.css'
import ava from './../../assets/img/icons/noel/avatar.png'
import logo from './../../assets/img/icons/slide/web-logo.png'
import buttonmenu from './../../assets/img/icons/slide/menu-options.png'
import { NavLink } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'


export default function Header() {

    const toggleMenu = () => {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('active');
        var buttonMenu = document.querySelector('.menu__button');
        buttonMenu.classList.toggle('active');
        var layout = document.querySelector('.layout');
        layout.classList.toggle('active');
    }

    // const stickClass = () =>{
        // window.addEventListener('scroll', () =>{
        //     var nav = document.querySelector('.nav');
        //     nav.classList.toggle('sticky', window.scrollY >0);
        // })
    // }

    return (
        <div className="header">
            <div className="layout"></div>
            <div className="d-flex justify-content-between px-lg-4 nav">
                <div className="logo">
                    <NavLink to="/">
                        <img height={50} src={logo} alt />
                    </NavLink>
                </div>
                <div className="service">
                    <ul>
                        <li>
                            <a href="#">Lịch Chiếu</a>
                        </li>
                        <li>
                            <a href="#">Cụm Rạp</a>
                        </li>
                        <li>
                            <a href="#">Ứng Dụng</a>
                        </li>
                    </ul>
                </div>
                <div className="user mr-5">
                    <ul>
                        <li>
                            <a className="login" href="#">
                                <img className="user__login" height={30} src={ava} alt="avatar" />
                                Đăng Nhập
                            </a>
                        </li>
                        <li>
                            <a className="user__register" href="#">Đăng Kí</a>
                        </li>
                    </ul>
                </div>
                <button className="menu__button" onClick={toggleMenu}>
                    <img height={10} src={buttonmenu} alt="..." />
                </button>
            </div>
            <div className="menu">
                <ul>
                    <li className="menu__dangnhap">
                        <div>
                            <img className="menu__login" height={30} src={ava} alt="..." />
                            <NavLink id="dangnhap" to="/">
                                Đăng Nhập
                            </NavLink>
                        </div>
                        <button onClick={toggleMenu}>
                            <RightOutlined id="login__icon" />
                        </button>
                    </li>
                    <li>
                        <NavLink to="/">
                            Đăng Kí
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Lịch Chiếu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Cụm Rạp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Ứng Dụng
                        </NavLink>
                    </li>

                </ul>
            </div>

        </div>

    )
}
