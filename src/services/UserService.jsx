// import { ACCESS_TOKEN } from "../util/settings";
import baseService from "./baseService";

export class UserService extends baseService{
    dangNhap = (user) =>{
        return this.post('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap', user);
    }
    dangKi = (user) =>{
        return this.post('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy', user);
    }
    capNhat = (user, token) => {
        return this.put('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', user, token)
    }
    // thongTin = (token) =>{
    //     return this.post('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan', '', token)
    // }
}

export const UserManagerService = new UserService();