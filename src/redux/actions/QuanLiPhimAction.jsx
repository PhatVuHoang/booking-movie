import axios from 'axios';
import { GET_CUM_RAP, GET_CUM_RAP_HE_THONG, GET_FILMS, PLAY_MODAL } from './types/QuanLiPhimType';

export const getFilmsAction = () => {


    return async dispatch => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET',
            });
            dispatch({
                type: GET_FILMS,
                mangPhim: result.data.content,
            })
        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}
export const playModal = (maPhim, trailerId, isOpen) => ({
    type: PLAY_MODAL,
    maPhim: maPhim, trailerId: trailerId, isOpen: isOpen
})

export const getCumRapAction = () => {
    return async dispatch => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01',
                method: 'GET',
            });
            dispatch({
                type: GET_CUM_RAP,
                cumRap: result.data.content,
            })
        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}
export const getCumRapHeThongAction = (maHeThong) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThong}`,
                method: 'GET',
            });
            dispatch({
                type: GET_CUM_RAP_HE_THONG,
                cumRapTheoHeThong: result.data.content,
            })
        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}