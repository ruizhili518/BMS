import http from './axios'

export const getOrderTotalData = () => {
    return http.request({
        url: '/order-totals',
        method: 'get'
    })
}

export const getRevenueTotal = () => {
    return http.request({
        url: '/revenue-totals',
        method: 'get'
    })
}