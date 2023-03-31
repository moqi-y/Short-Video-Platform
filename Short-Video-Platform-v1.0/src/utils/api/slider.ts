import request from '../http'
export function getSlider() {
    return request({
        url: '/api/getImages?page=0&size=6',
        method: 'get'
    })
}