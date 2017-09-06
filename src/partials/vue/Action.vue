<template lang="pug">
.action--wrapper
  .btn-microphone
    i.fa.fa-microphone(aria-hidden="true", @click.prevent="addMessage('hogehogehogehogehogeho')")
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