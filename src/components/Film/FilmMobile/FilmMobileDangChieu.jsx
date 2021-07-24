import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFilmsAction } from '../../../redux/actions/QuanLiPhimAction';
import Phim from '../Phim';

const FilmMobile = (props) => {
    let { danhSachPhim } = useSelector(state => state.FilmReducer);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getFilmsAction());
    }, [])


    const renderPhimDangChieu = () => {
        const danhSachPhimDangChieu = danhSachPhim.filter(x => x.dangChieu);
        return danhSachPhimDangChieu.map((phim, index) => {
            return <div key={index}>
                <Phim phim={phim} />
            </div>
        })
    }


    return (
        <div className="d-flex flex-column align-items-center filmmobile">
            {renderPhimDangChieu()}
        </div>
    )
}

export default FilmMobile
