<template lang="pug">
.speech_wrap(ref="wrap")
  transition-group.speech-lists(tag="ul", name="list", @enter="enter", ref="lists")
    li.speech-list(v-for="(item, index) in messages", key="index")
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
  },
  methods: {
    enter () {
      this.$refs.wrap.scrollTop = this.$refs.lists.$el.clientHeight
    }
  }
}
</script>
