<template>
  <div class="container column">
    <app-card></app-card>
  </div>
  <div class="container">
    <app-comment></app-comment>
  </div>
</template>

<script>


import AppComment from '@/components/AppComment'
import AppCard from '@/components/AppCard'

export default {
  name: 'App',
  components: {
    AppCard,
    AppComment,
  }
}
</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }
  
  .avatar img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
</style>
