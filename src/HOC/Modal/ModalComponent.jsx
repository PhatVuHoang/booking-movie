import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import { openComponent } from '../../redux/actions/UserAction';
import './ModalComponent.css'

export default function ModalComponent(props) {

    const {Component} = useSelector(state=>state.UserReducer);


    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(openComponent({
            name: '',
            type: '',
            isModalVisible: false
        }))
    };

    return (
        <div className="modalantd">
            <Modal title={Component.type} visible={Component.isModalVisible} onCancel={handleCancel}>
                {<Component.name />}
            </Modal>
        </div>
    )
}
