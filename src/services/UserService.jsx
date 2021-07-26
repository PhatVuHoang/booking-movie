import baseService from "./baseService";

export class UserService extends baseService{
    dangNhap = (user) =>{
        return this.post('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap', user);
    }
}

export const UserManagerService = new UserService();