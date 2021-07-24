import axios from 'axios';
import { GET_FILMS } from './types/QuanLiPhimType';

export const getFilmsAction = () =>{


    return async dispatch =>{
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET',
            });
            dispatch({
                type: GET_FILMS,
                mangPhim : result.data.content,
            })
        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}