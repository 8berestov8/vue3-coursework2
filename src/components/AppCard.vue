<template>
  <app-form-control @formSubmit="onSubmit($event)"></app-form-control>
  
  <div class="card card-w70">
    <div
      v-for="item in items"
      :key="item.id"
      v-if="!isVisibleText"
    >
  
      <component
        :is="'app-card-'+item.type"
        :value="item.value"
        :type="item.type"
      ></component>
    </div>
    
    <h3 v-if="isVisibleText">Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import AppFormControl from '@/components/AppFormControl'
import AppCardText from '@/components/AppCardText'
import AppCardSubtitle from '@/components/AppCardSubtitle'
import AppCardAvatar from '@/components/AppCardAvatar'
import AppCardTitle from '@/components/AppCardTitie'
import api from '@/API/api'

export default {
  name: 'AppCard',
  data () {
    return {
      value: '',
      selected: '',
      items: []
    }
  },
  methods: {
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
    },
    async onSubmit (event) {
      this.items.push(
        {
          'type': event.select,
          'value': event.value
        }
      )
      
      try {
        await api.setSummary({
          'type': event.select,
          'value': event.value
        })
      } catch (e) {
        console.log(e)
      }
    },
  },
  computed: {
    isVisibleText () {
      return this.items.length === 0
    },
  },
  mounted () {
    this.loadSummary()
  },
  components: {
    AppFormControl,
    AppCardText,
    AppCardSubtitle,
    AppCardAvatar,
    AppCardTitle
  }
}
</script>

