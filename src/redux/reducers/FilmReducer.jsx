import { GET_FILMS } from "../actions/types/QuanLiPhimType";


const defaultState = {
    danhSachPhim: [],
}

export const FilmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FILMS: {
            // let danhSachPhim = [...state.danhSachPhim];
            // danhSachPhim = action.mangPhim;
            // state.danhSachPhim = danhSachPhim;
            state.danhSachPhim = action.mangPhim
            console.log('asdasd', state.danhSachPhim);
            return {...state};
        }
    
        default: return {...state}
    }
}
