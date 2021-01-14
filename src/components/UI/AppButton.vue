<template>
  <button
    class="btn"
    :class="color"
    @click="$emit('change')"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['change'],
  props: {
    color: String
  }
}
</script>
