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

export const getOrderHistory = () => {
    return http.request({
        url: '/order-histories',
        method: 'get'
    })
}

export const getStore = () => {
    return http.request({
        url: '/stores',
        method: 'get'
    })
}

export const deleteStoreById = (id) => {
    return http.request({
        url: `/stores/${id}`,
        method: 'delete'
    })
}

export const addStore = (data) => {
    return http.request({
        url: '/stores',
        method: 'post',
        data: {data}
    })
}