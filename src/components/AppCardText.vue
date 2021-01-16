<template>
  <p v-if="type === 'text'">
    {{ value }}
  </p>
</template>

<script>
export default {
  name: 'AppCardText',
  props: {
    value: String,
    type: String
  }
}
</script>
