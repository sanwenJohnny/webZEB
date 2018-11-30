export default {
  namespaced: true,
  state: {
    userInfo: {
      name: 'user-暂无'
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    async getUserInfo ({ dispatch, commit }) {
      let result = await new Promise((resolve) => {
        setTimeout(() => {
          commit('setUserInfo', { name: 'Abiel' })
          resolve({ name: 'Abiel' })
        }, 1000)
      })
      // dispatch('someOtherAction')
      return result
    }
  },
  getters: {
    userInfo: state => {
      return state.userInfo
    }
  }
}
