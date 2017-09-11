<template lang="pug">
#app.wrapper
  Message(:messages="messages")
  Action(:addMessage="addMessage")
</template>
<script>
import Message from './Message'
import Action from './Action'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if (!SpeechRecognition) {
  throw alert(`
    お使いのブラウザではご利用できません。
    Google Chromeを使用してください。
  `)
}

export default {
  data () {
    return {
      messages: [
        {
          date: new Date(),
          message: 'hoge'
        }
      ]
    }
  },
  methods: {
    addMessage (message) {
      this.messages.push({
        date: new Date(),
        message
      })
    }
  },
  components: {
    Message,
    Action
  }
}
</script>
