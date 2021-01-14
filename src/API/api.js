import axios from 'axios'

//URL комментариев
const urlComment = 'https://jsonplaceholder.typicode.com/comments?_limit=42'

//URL базы данных
const dataBaseUrl = 'https://course-2-2bf45-default-rtdb.firebaseio.com/summary.json'

export default {
  //Получение данных коментарии
  getComment () {
    return axios.get(urlComment)
  },
  // Получение данных
  getSummary() {
    return axios.get(dataBaseUrl)
  },
  //Отправка данных
  setSummary (items) {
    return axios.post(dataBaseUrl,  items  )
  },
}
