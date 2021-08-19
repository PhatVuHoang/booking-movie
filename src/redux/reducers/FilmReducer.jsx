import { GET_CUM_RAP, GET_CUM_RAP_HE_THONG, GET_FILMS, PLAY_MODAL } from "../actions/types/QuanLiPhimType";


const defaultState = {
    danhSachPhim: [],
    modalDefault: {
        maPhim: '',
        trailer: '',
        isOpen: false
    },
    cumRap: [],
    cumRapTheoHeThong: []
}

export const FilmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FILMS: {
            // let danhSachPhim = [...state.danhSachPhim];
            // danhSachPhim = action.mangPhim;
            // state.danhSachPhim = danhSachPhim;
            state.danhSachPhim = action.mangPhim
            return {...state};
        }

        case PLAY_MODAL : {
            let modal = {...state.modalDefault};
            modal.maPhim = action.maPhim;
            modal.trailer = action.trailerId;
            modal.isOpen = action.isOpen
            return {...state, modalDefault: modal};
        }

        case GET_CUM_RAP : {
            return {...state, cumRap: action.cumRap}
        }

        case GET_CUM_RAP_HE_THONG : {
            return {...state, cumRapTheoHeThong: action.cumRapTheoHeThong}
        }
    
        default: return {...state}
    }
}
