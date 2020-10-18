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
    error_message: "",
  },
  getters: {
    countdown_milliseconds(state) {
      return state.countdown_target == null ? 0 : state.countdown_target.diffNow().milliseconds
    },
    error_message(state) {
      return state.error_message
    },
  },
  mutations: {
    set_countdown(state, countdown) {
      state.countdown_uuid = countdown.uuid
      state.countdown_target = DateTime.fromISO(countdown.countdown_target)
    },
    set_error_message(state, error) {
      state.error_message = error.toString()
    },
    clear_error_message(state) {
      state.error_message = ""
    },
  },
  actions: {
    fetch_countdown(context, payload) {
      return CountdownApiService
        .get(payload.uuid)
        .then(({data}) => {
          context.commit("set_countdown", data)
        })
        .catch((error) => {
          context.dispatch("set_error", error)
        })
    },
    create_countdown(context, payload) {
      return CountdownApiService
        .post(payload.target)
        .then(({data}) => {
          context.commit("set_countdown", data)
          router.push({name: 'detail', params: { uuid: data.uuid }})
        })
        .catch((error) => {
          context.dispatch("set_error_message", error)
        })
    },
    set_error_message(context, payload) {
      context.commit("set_error_message", payload)
      setTimeout(function(){ context.dispatch("clear_error_message"); }, 3000)
    },
    clear_error_message(context) {
      context.commit("clear_error_message")
    }
  },
})
