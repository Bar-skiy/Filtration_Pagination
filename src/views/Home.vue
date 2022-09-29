<template>
  <div class="card">
    <h1 class="card-title">Тестовое задание Vue
      <button class="btn " @click="modal = true">Добавить данные в таблицу</button>
    </h1>

    <request-filter v-model="filter"></request-filter>
    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Ввод данных" @close="modal = false">
        <request-modal/>
      </app-modal>
    </teleport>
  </div>

</template>

<script>
import {ref, computed} from "vue";
import {useStore} from 'vuex';
import RequestTable from "@/components/request/RequestTable";
import AppModal from "@/components/ui/AppModal";
import RequestModal from "@/components/request/RequestModal";
import RequestFilter from "@/components/request/RequestFilter";

export default {

  setup() {
    const store = useStore()
    const modal = ref(false)
    const filter = ref({})

    // watch(filter, val => console.log(val))

    const requests = computed(() => store.getters['requests']
        .filter(request => {
          if (filter.value.condition === 'equals') {
            if (filter.value.data && filter.value.column === 'designation') {
              return request.designation === filter.value.data
            }
            if (filter.value.data && filter.value.column === 'amount') {
              return request.amount === filter.value.data
            }
            if (filter.value.data && filter.value.column === 'distance') {
              return request.distance === filter.value.data
            }
          }
          if (filter.value.condition === 'contains') {
            if (filter.value.data && filter.value.column === 'designation') {
              return request.designation.includes(filter.value.data)
            }
            if (filter.value.data && filter.value.column === 'amount') {
              return request.amount.includes(filter.value.data)
            }
            if (filter.value.data && filter.value.column === 'distance') {
              return request.distance.includes(filter.value.data)
            }
          }
          if (filter.value.condition === 'more') {
            if (filter.value.data && filter.value.column === 'amount') {
              return +request.amount > +filter.value.data
            }
            if (filter.value.data && filter.value.column === 'distance') {
              return +request.distance > +filter.value.data
            }
          }
          if (filter.value.condition === 'less') {
            if (filter.value.data && filter.value.column === 'amount') {
              return +request.amount < +filter.value.data
            }
            if (filter.value.data && filter.value.column === 'distance') {
              return +request.distance < +filter.value.data
            }
          }

          return request
        })
    )
    console.log(requests)

    return {
      modal, filter, requests
    }

  },


  components: {RequestTable, AppModal, RequestModal, RequestFilter}
}
</script>
