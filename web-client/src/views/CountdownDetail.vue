<template>
  <div class="countdown-detail">
    Countdown Detail
    <br>
    {{ this.$store.countdown_uuid }}
    <br>
    {{ this.$store.countdown_target }}
  </div>
</template>

<script>

export default {
  name: 'CountdownDetail',
  mounted () {
    this.$store.dispatch("fetch_countdown", this.$route.params)
    .then(() => {
      console.log("OK")
    })
    .catch(() => {
      console.log("ERR")
    })
  },
}
</script>
