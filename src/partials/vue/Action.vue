<template lang="pug">
.action--wrapper
  button.btn-microphone(@click.prevent="toggleRecognization", :class="{'is-recognizing': isRecognizing}")
    i.fa.fa-microphone(aria-hidden="true")
    span.speech-message(v-show="isRecognizing")
      | お話ください
  label(for="continuous")
    input#continuous(type="checkbox", @change="toggleContinuous")
    |  録音し続ける
</template>
<script>
export default {
  props: {
    toggleRecognization: {
      type: Function,
      require: true
    },
    isRecognizing: {
      type: Boolean,
      require: true
    },
    toggleContinuous: {
      type: Function,
      require: true
    }
  }
}
</script>
