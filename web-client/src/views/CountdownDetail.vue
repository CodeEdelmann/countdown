<template>
  <div class="countdown-detail">
    {{ path }}
    <br>
    <countdown :time="countdown_milliseconds" :interval="100">
      <template slot-scope="props">
        {{props.days}} days {{props.hours}} hours {{props.minutes}} minutes {{props.seconds}} seconds
      </template>
    </countdown>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
import { mapGetters } from 'vuex'

export default {
  name: 'CountdownDetail',
  components: {
    'countdown': VueCountdown,
  },
  data: function() {
    return {
      path: location.toString(),
    }
  },
  computed: {...mapGetters(['countdown_milliseconds'])},
  mounted () {
    this.$store.dispatch("fetch_countdown", this.$route.params)
  },
}
</script>
