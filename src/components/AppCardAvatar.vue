<template>
  <div
    class="avatar"
    v-if="type === 'avatar'"
  >
    <img :src="value"/>
  </div>
</template>

<script>
export default {
  name: 'AppCardAvatar',
  props: {
    value: String,
    type: String
  }
}
</script>
