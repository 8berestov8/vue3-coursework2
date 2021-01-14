<template>
  <div class="container column">
    <form class="card card-w30" @submit.prevent="onSubmit">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select id="type" v-model="selected">
          <option value="title">Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>
      
      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value" rows="3" v-model="value"></textarea>
      </div>
      
      <app-button
        :color="'primary'"
        :disabled="isVisibleBtn"
      >Добавить
      </app-button>
    </form>
    
    <div class="card card-w70">
      <div
        v-for="item in items"
        :key="item.id"
        v-show="!isVisibleText"
      >
        
        <app-card-title v-if="item.type == 'title'">{{ item.value }}</app-card-title>
        
        <app-card-avatar v-if="item.type == 'avatar'">
          <img :src="item.value "/>
        </app-card-avatar>
        
        <app-card-subtitle v-if="item.type == 'subtitle'">{{ item.value }}</app-card-subtitle>
        
        <app-card-text v-if="item.type == 'text'">{{ item.value }}</app-card-text>
      </div>
      
      <h3 v-show="isVisibleText">Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>
  <div class="container">
    <app-comment></app-comment>
  </div>

</template>

<script>
import api from '@/API/api'

import AppButton from '@/components/UI/AppButton'
import AppComment from '@/components/AppComment'
import AppCardText from '@/components/AppCardText'
import AppCardSubtitle from '@/components/AppCardSubtitle'
import AppCardAvatar from '@/components/AppCardAvatar'
import AppCardTitle from '@/components/AppCardTitie'

export default {
  name: 'App',
  data () {
    return {
      value: '',
      selected: 'title',
      items: []
    }
  },
  computed: {
    isVisibleBtn () {
      return this.value.length < 4 ? true : false
    },
    isVisibleText () {
      return this.items.length === 0
    }
  },
  methods: {
    async onSubmit () {
      this.items.push(
        {
          'type': this.selected,
          'value': this.value
        }
      )
      try {
        await api.setSummary({
          'type': this.selected,
          'value': this.value
        })
        this.value = ''
      } catch (e) {
        this.value = ''
        console.log(e)
      }
    },
    async loadSummary () {
      try {
        const { data } = await api.getSummary()
        if (!data) {
          throw  new Error('Список людей пуст')
        }
        this.items = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        })
      } catch (e) {
        console.log(e)
      }
    }
    
  },
  mounted () {
    this.loadSummary()
  },
  components: {
    AppButton,
    AppComment,
    AppCardText,
    AppCardSubtitle,
    AppCardAvatar,
    AppCardTitle
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
