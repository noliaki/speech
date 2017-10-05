<template lang="pug">
#app.wrapper
  Message(:messages="messages")
  Action(
    :toggleRecognization="toggleRecognization",
    :isRecognizing="isRecognizing",
    :toggleContinuous="toggleContinuous"
  )
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
      recognition: undefined,
      isRecognizing: false,
      continuous: false,
      messages: []
    }
  },
  methods: {
    addMessage (message) {
      this.messages.push({
        date: new Date(),
        message
      })
    },
    toggleContinuous (event) {
      console.log(event)
      this.continuous = event.target.checked
    },
    toggleRecognization () {
      if (this.isRecognizing) {
        this.recognition.stop()
        this.isRecognizing = false
        return
      }

      this.recognition.start()
    },
    onResult (event) {
      this.messages.push({
        date: new Date(),
        message: event.results[0][0].transcript
      })
    },
    onEnd (event) {
      if (this.continuous && this.isRecognizing) {
        this.recognition.start()
        return
      }

      this.isRecognizing = false

      console.log(event)
    },
    onStart (event) {
      this.isRecognizing = true
    },
    onError (event) {
      this.isRecognizing = false
    }
  },
  components: {
    Message,
    Action
  },
  created () {
    this.recognition = new SpeechRecognition()
    this.recognition.continuous = false
    this.recognition.lang = 'ja'

    this.recognition.addEventListener('result', this.onResult)
    this.recognition.addEventListener('end', this.onEnd)
    this.recognition.addEventListener('start', this.onStart)
    this.recognition.addEventListener('error', this.onError)
  }
}
</script>
