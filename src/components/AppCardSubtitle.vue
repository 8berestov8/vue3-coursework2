<template>
  <h2 v-if="type === 'subtitle'">
    {{ value }}
  </h2>
</template>

<script>
export default {
  name: 'AppCardSubtitle',
  props: {
    value: String,
    type: String
  }
}
</script>

