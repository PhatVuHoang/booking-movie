import { UserManagerService } from "../../services/UserService";
import { ACCESS_TOKEN, USER_LOGN } from "../../util/settings";
import { OPEN_MODAL_USER } from "./types/UserType";
import {history} from './../../App'

export const openComponent = (component) => ({
    type: OPEN_MODAL_USER,
    component
})

export const loginAction = (user) =>{
    return async dispatch =>{
        try{
        const result = await UserManagerService.dangNhap(user);

        localStorage.setItem(USER_LOGN, JSON.stringify(result.data.content));
        localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);

        history.push("/");

        dispatch(openComponent({
            name:'',
            type: '',
            isModalVisible: false
        }))

        } catch(errors){
            console.log({errors});
        }
    }
}
