<template>
  <form @submit.prevent="onSubmit">

    <div class="form-control" >
      <label for="date">Дата</label>
      <input type="date" id="date" v-model="$store.state.date">
    </div>

    <div class="form-control" >
      <label for="designation">Название</label>
      <input type="text" id="designation" v-model="$store.state.designation">
    </div>

    <div class="form-control" >
      <label for="amount">Количество</label>
      <input type="number" min = 0 id="amount" v-model="$store.state.amount">
    </div>

    <div class="form-control" >
      <label for="distance">Расстояние</label>
      <input type="number" min = 0 id="distance" v-model="$store.state.distance">
    </div>

    <button class="btn primary" > Отправить</button>
  </form>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {

  methods: {
    ...mapMutations(['createRequest']),
    ...mapActions(["submitRequestDB"]),

    onSubmit() {
      this.createRequest()
      this.submitRequestDB()
    },
  },
}
</script>
