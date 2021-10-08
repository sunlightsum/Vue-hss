import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { login } from '@/api/user.js'
// 状态
const state = {
        token: getToken()
    }
    // 修改状态
const mutations = {
    // 设置token
    setToken(state, token) { //第一个参数是state 第二个参数相当与接第一个参数
        state.token = token // 设置token  只是修改state的数据  123 =》 1234
            // vuex变化 => 缓存数据
        setToken(token) // vuex和 缓存数据的同步
    },
    // 删除缓存
    removeToken(state) {
        state.token = null // 删除vuex的token
        removeToken() // 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
    }
}

// 执行异步
const actions = {
    async login(context, data) {
        const result = await login(data) //拿到token
        context.commit('setToken', result) //存储token
            // setTime()
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}