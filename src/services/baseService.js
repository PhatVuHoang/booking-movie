import axios from "axios"
import { ACCESS_TOKEN } from "../util/settings"

export default class baseService{
    get = (url, ACCESS_TOKEN) => {
      return axios({
        url: url,
        method: 'GET',
        headers:{
          "authorize": ACCESS_TOKEN
        }
      })
    }


    post = (url, data) => {
      return axios({
        url: url,
        method: 'POST',
        data: data,
      })
    }
    put = (url, data, ACCESS_TOKEN) => {
      return axios({
        url: url,
        data: data,
        method: 'PUT',
        headers:{
          "authorize": ACCESS_TOKEN
        }
      })
    }
    delete = (url, ACCESS_TOKEN) => {
      return axios({
        url: url,
        method: 'DELETE',
        headers:{
          "authorize": ACCESS_TOKEN
        }
      })
    }
}