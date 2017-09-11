<template lang="pug">
.action--wrapper
  .btn-microphone(@click.prevent="addMessage('hogehogehogehogehogeho')")
    i.fa.fa-microphone(aria-hidden="true")
</template>
<script>
export default {
  props: {
    addMessage: {
      type: Function,
      require: true
    }
  }
}
</script>
