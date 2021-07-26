import React, { Fragment, useState } from 'react'
import './HeaderComponent.css'
import ava from './../../assets/img/icons/noel/avatar.png'
import logo from './../../assets/img/icons/slide/web-logo.png'
import buttonmenu from './../../assets/img/icons/slide/menu-options.png'
import { NavLink } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { openComponent } from '../../redux/actions/UserAction'
import LoginComponent from './../LoginComponent/LoginComponent'
import RegisterComponent from './../RegisterComponent/RegisterComponent'
import { USER_LOGN } from '../../util/settings';
import { Menu, Dropdown } from 'antd';


export default function HeaderComponent() {

    const toggleMenu = () => {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('active');
        var buttonMenu = document.querySelector('.menu__button');
        buttonMenu.classList.toggle('active');
        var layout = document.querySelector('.layout');
        layout.classList.toggle('active');
    }

    const dispatch = useDispatch();

    const handleModal = (name, type) => {
        dispatch(openComponent({
            name: name,
            type: type,
            isModalVisible: true
        }))
    }

    // const stickClass = () =>{
    // window.addEventListener('scroll', () =>{
    //     var nav = document.querySelector('.nav');
    //     nav.classList.toggle('sticky', window.scrollY >0);
    // })
    // }
    const menuDropdown = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Trang cá nhân
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" className="text-danger" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Đăng xuất
                </a>
            </Menu.Item>
        </Menu>
    )


    return (
        <div className="header">
            <div className="layout"></div>
            <div className="d-flex justify-content-between px-lg-4 nav">
                <div className="logo">
                    <NavLink to="/">
                        <img height={50} src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="service">
                    <ul>
                        <li>
                            <a href="/">Lịch Chiếu</a>
                        </li>
                        <li>
                            <a href="/">Cụm Rạp</a>
                        </li>
                        <li>
                            <a href="/">Ứng Dụng</a>
                        </li>
                    </ul>
                </div>
                <div className="user mr-5">
                    <ul>
                        {localStorage.getItem(USER_LOGN) ? <li>
                            <Dropdown overlay={menuDropdown}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <img className="user__login" height={30} src={ava} alt="avatar" />
                                    Hello, Hoai
                                </a>
                            </Dropdown>
                        </li>
                            :
                            <Fragment>
                                <li>
                                    <a className="login" href="#" onClick={() => {
                                        handleModal(LoginComponent, 'Đăng Nhập')
                                    }}>
                                        <img className="user__login" height={30} src={ava} alt="avatar" />
                                        Đăng Nhập
                                    </a>
                                </li>
                                <li>
                                    <a className="user__register" href="#" onClick={() => {
                                        handleModal(RegisterComponent, 'Đăng Kí')
                                    }}>Đăng Kí</a>
                                </li>
                            </Fragment>}
                    </ul>
                </div>
                <button className="menu__button" onClick={toggleMenu}>
                    <img height={10} src={buttonmenu} alt="..." />
                </button>
            </div>
            <div className="menu">
                <ul>
                    {localStorage.getItem(USER_LOGN) ?
                        <li className="menu__dangnhap">
                            <div>
                                <img className="menu__login" height={30} src={ava} alt="..." />
                                <NavLink id="dangnhap" to="/">
                                    Hello, Hoai
                                </NavLink>
                            </div>
                            <button onClick={toggleMenu}>
                                <RightOutlined id="login__icon" />
                            </button>
                        </li>

                        :
                        <Fragment>
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
                        </Fragment>
                    }
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
                    {localStorage.getItem(USER_LOGN) ? <li>
                        <NavLink className="text-danger"
                         to="/">
                            Đăng xuất
                        </NavLink>
                    </li> : ''}
                </ul>
            </div>

        </div>

    )
}
