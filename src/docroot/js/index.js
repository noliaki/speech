import Vue from 'vue'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if (!SpeechRecognition) {
  throw alert(`
    お使いのブラウザではご利用できません。
    Google Chromeを使用してください。
  `)
}

class Comment {
  constructor (comment) {
    this.comment = comment
    this.date = new Date()
  }
}

new Vue({
  el: '#app',
  data: {
    comments: [],
    rec: new SpeechRecognition()
  },
  methods: {
    onResult (event) {
      const len = event.results.length
      const comment = event.results.item(len - 1).item(0).transcript

      this.messages.push(new Comment(comment))
    }
  },
  created () {
    this.rec.lang = 'ja-JP'
    this.rec.addEventListener('result', this.onResult, false)
  }
})
