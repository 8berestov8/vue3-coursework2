<template>
  <h1 v-if="type === 'title'">
    {{ value }}
  </h1>
</template>

<script>
export default {
  name: 'AppCardTitle',
  props: {
    value: String,
    type: String
  }
}
</script>
