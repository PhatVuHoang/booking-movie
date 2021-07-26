import React from 'react';
import './LoginComponent.css';
import {formik, useFormik} from 'formik';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/UserAction';

export default function LoginComponent(props) {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: ''
        },
        onSubmit: (val) => {
            // console.log({val});
          dispatch(loginAction(val));
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="container">
            <div className="group">
                <input type="text" name='taiKhoan' required onChange={formik.handleChange} />
                <span className="highlight" />
                <span className="bar" />
                <label>Username</label>
            </div>
            <div className="group">
                <input type="password" name='matKhau' required onChange={formik.handleChange} />
                <span className="highlight" />
                <span className="bar" />
                <label>Password</label>
            </div>
            <div className="text-center">
                <button className="btnModal">Đăng nhập</button>
            </div>
        </form>
    )
}
