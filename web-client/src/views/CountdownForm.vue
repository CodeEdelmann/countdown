<template>
  <div class="countdown-form">
    Countdown Form
    <br>
    <input type="datetime-local" v-model="target"></input>
    <button type="button" v-on:click="onSubmit">Submit</button>
  </div>
</template>

<script>

export default {
  name: 'CountdownForm',
  data: function () {
    return {
      target: new Date(Date.now()).toISOString().replace("Z", ""),
    }
  },
  methods: {
    onSubmit: function() {
      this.$store.dispatch("create_countdown", {
        target: this.target + "Z"
      })
      .then(() => {
        console.log("OK") // TODO Redirect on succesful state change, error throw on failed state change
      })
      .catch(() => {
        console.log("ERR")
      })
    },
  },
}
</script>
