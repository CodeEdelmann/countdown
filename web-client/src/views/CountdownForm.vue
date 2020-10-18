<template>
  <div class="countdown-form">
    <datetime v-model="target" type="datetime"></datetime>
    <button type="button" v-on:click="onSubmit">Submit</button>
  </div>
</template>

<script>
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.min.css'

export default {
  name: 'CountdownForm',
  components: {
    'datetime': Datetime,
  },
  data: function () {
    return {
      target: new Date(Date.now()).toISOString(),
    }
  },
  methods: {
    onSubmit: function() {
      this.$store.dispatch("create_countdown", {
        target: this.target
      })
    },
  },
}
</script>
