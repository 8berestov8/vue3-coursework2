<template>
  <form class="card card-w30" @submit.prevent="submitForm">
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
</template>

<script>

import AppButton from '@/components/UI/AppButton'

export default {
  name: 'AppFormControl',
  emits: ['formSubmit'],
  data () {
    return {
      value: '',
      selected: 'title',
    }
  },
  methods: {
    submitForm () {
      const value = this.value,
        select = this.selected
      this.$emit('formSubmit', {
        value,
        select
      })
      this.value = ''
      this.selected = 'title'
    }
    
  },
  computed: {
    isVisibleBtn () {
      return this.value.length < 4
    },
  },
  components: {
    AppButton,
  },
}
</script>

