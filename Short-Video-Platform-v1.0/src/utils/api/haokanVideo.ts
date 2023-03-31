import request from '../http'
export function getHaoKanVideo() {
    return request({
        url: '/api/getHaoKanVideo?page=0&size=16',
        method: 'get'
    })
}