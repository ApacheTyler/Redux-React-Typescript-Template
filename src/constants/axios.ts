
import apiEndpoint from './users-api-url'
import axios from 'axios'

export default axios.create({
    baseURL: apiEndpoint,
    headers: {'X-Custom-Header': 'foobar'}
});
