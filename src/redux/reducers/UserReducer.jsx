import LoginComponent from "../../components/LoginComponent/LoginComponent";
import { OPEN_MODAL_USER } from "../actions/types/UserType"

const initialState = {
    Component: {
        name: LoginComponent ,
        type: 'Đăng Nhập',
        isModalVisible: false
    }
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL_USER : {
            let component = {...state.Component};
            component.name = action.component.name;
            component.type = action.component.type;
            component.isModalVisible = action.component.isModalVisible;
            return {...state, Component: component}
        }

    default:
        return {...state}
    }
}
