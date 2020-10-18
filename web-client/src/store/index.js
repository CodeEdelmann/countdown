import Vue from 'vue'
import Vuex from 'vuex'

import CountdownApiService from '@/services/api.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countdown_uuid: "",
    countdown_target: null,
  },
  mutations: {
    set_countdown(state, countdown) {
      state.countdown_uuid = countdown.uuid
      state.countdown_target = countdown.countdown_target
    },
    unset_countdown(state) {
      state.countdown_uuid = ""
      state.countdown_target = null
    },
  },
  actions: {
    fetch_countdown(context, payload) {
      return CountdownApiService
        .get(payload.uuid)
        .then(({data}) => {
          context.commit("set_countdown", data)
        })
        .catch(({response}) => {
          console.log("fetch error")
          console.log(response)
        })
    },
    create_countdown(context, payload) {
      return CountdownApiService
        .post(payload.target)
        .then(({data}) => {
          context.commit("set_countdown", data)
        })
        .catch(({response}) => {
          console.log("create error")
          console.log(response)
        })
    }
  },
})
