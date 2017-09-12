<template lang="pug">
.speech_wrap(ref="wrap")
  transition-group.speech-lists(tag="ul", name="list", @enter="enter", ref="lists")
    li.speech-list(v-for="(item, index) in messages", key="index")
      .speech-list--left_col
        .speech-list--date
          | {{ item.date }}
        .speech-list--text
          | {{ item.message }}
      .speech-list--right_col
        a.tweet(href="#tweet", @click.prevent="tweet(index)")
          i.fa.fa-twitter-square(aria-hidden="true")
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
    },
    tweet (index) {
      const shareURL = encodeURIComponent(this.messages[index].message)

      window.open(
        `https://twitter.com/intent/tweet?text=${shareURL}`,
        '',
        'width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=!'
      )
    }
  }
}
</script>
