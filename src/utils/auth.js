import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_hss_token'
    // const TokenTiem = 'vue_admin_hss_time'
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
// // 设置时间戳
// export function setTime() {
//     return Cookies.set(TokenTiem, data.now())
// }
// //取时间戳
// export function getTime() {
//     return Cookies.get(TokenTime)
// }