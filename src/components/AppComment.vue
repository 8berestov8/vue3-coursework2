<template>
  <p v-if="comments.length === 0">
    <app-button
      :color="'primary'"
      @change="getComments"
    >Загрузить комментарии
    </app-button>
  </p>
  <div class="card" v-else>
    <h2>Комментарии</h2>
    <ul class="list">
      <li class="list-item" v-for="item in comments" :key="item.id">
        <div>
          <p><strong>{{ item.email }}</strong></p>
          <small>{{ item.body }}</small>
        </div>
      </li>
    </ul>
  </div>
  <app-loader v-show="loading"></app-loader>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppLoader from '@/components/UI/AppLoader'
import api from '@/API/api'

export default {
  name: 'AppComment',
  data () {
    return {
      comments: [],
      loading: false
    }
  },
  methods: {
    getComments () {
      this.loading = true
      setTimeout(async () => {
        try {
          this.loading = false
          const { data } = await api.getComment()
          this.comments = data
        } catch (e) {
          this.loading = false
          console.log(e)
        }
      }, 2000)
    }
  },
  components: {
    AppButton,
    AppLoader
  }
}
</script>
