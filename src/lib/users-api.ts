import axios from '../constants/axios'
import {AxiosPromise} from 'axios'


export function getUsers (): AxiosPromise {
    return axios.get('/users')
}