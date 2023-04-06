import request from '../http'
export function getMiniVideo() {
    return request({
        url: '/api/getMiniVideo?page=0&size=16',
        method: 'get'
    })
}