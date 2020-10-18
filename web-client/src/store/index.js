import Vue from 'vue'
import Vuex from 'vuex'
import DateTime from 'luxon/src/datetime.js'

import CountdownApiService from '@/services/api.service'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countdown_uuid: "",
    countdown_target: null,
  },
  getters: {
    countdown_milliseconds(state) {
      return state.countdown_target == null ? 0 : state.countdown_target.diffNow().milliseconds
    },
  },
  mutations: {
    set_countdown(state, countdown) {
      state.countdown_uuid = countdown.uuid
      state.countdown_target = DateTime.fromISO(countdown.countdown_target)
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
          router.push({name: 'detail', params: { uuid: data.uuid }})
        })
        .catch(({response}) => {
          console.log("create error")
          console.log(response)
        })
    }
  },
})
