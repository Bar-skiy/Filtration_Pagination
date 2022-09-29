<template>
  <div class="filter">
    <div class="form-control">
      <input type="text"
             placeholder=" Введите данные фильтра"
             v-model="data">
    </div>
    <div class="form-control">
      <select v-model="column">
        <option value="a" disabled selected>Выберите колонку</option>
        <option value="designation">Название</option>
        <option value="amount">Количество</option>
        <option value="distance">Расстояние</option>
      </select>
    </div>
  <div class="form-control">
    <select v-model="condition">
      <option value="a" disabled selected>Выберите условие </option>
      <option value="equals">Равно</option>
      <option value="contains">Содержит</option>
      <option value="more">Больше</option>
      <option value="less">Меньше</option>
    </select>
  </div>

  <button class="btn danger" v-if="isActive" @click="reset"> Сброс </button>
  </div>

</template>

<script>
import {computed, ref, watch} from 'vue'

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],

  setup(_, {emit}) {
    const data = ref()
    const column = ref('a')
    const condition = ref('a')


    watch([data, column, condition], values => {
      emit('update:modelValue', {
        data: values[0],
        column: values[1],
        condition: values[2]
      })
    })

    const reset = () => {
      data.value = ''
      column.value = 'a'
      condition.value = 'a'
    }

    const isActive = computed(() => data.value || column.value !== 'a'|| condition.value !== 'a')

    return {
      data,
      column,
      isActive,
      condition,
      reset
    }
  }
}
</script>

