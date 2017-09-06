<template lang="pug">
.speech_wrap
  ul.speech-lists
    li.speech-list(v-for="(item, index) in messages")
      .speech-list--date
        | {{ item.date }}
      .speech-list--text
        | {{ item.message }}
</template>
<script>
export default {
  props: {
    messages: {
      type: Array,
      require: true
    }
  }
}
</script>