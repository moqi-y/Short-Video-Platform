import request from '../http'
export function getShortVideo() {
    return request({
        url: '/api/getShortVideo?page=0&size=16',
        method: 'get'
    })
}