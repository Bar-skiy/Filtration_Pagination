<template>
  <div>
    <h4 v-if="requests.length === 0" class="text-center">Данных пока нет</h4>
    <table v-else class="table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Расстояние</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in paginatedData" :key="r.i">
          <td>{{ new Date(r.date).toLocaleDateString() }}</td>
          <td>{{ r.designation }}</td>
          <td>{{ r.amount }}</td>
          <td>{{ r.distance }}</td>
          <span class="alert-close" @click="delNote(r)">&times;</span>
        </tr>
      </tbody>
    </table>

    <div class="card-title">
      <div>
        <button
          class="btn warning"
          :disabled="pageNumber === 0"
          @click="prevPage"
        >
          назад
        </button>

        <button
          class="btn sir"
          :disabled="pageNumber >= pageCount - 1"
          @click="nextPage"
        >
          вперед
        </button>
      </div>

      <h5 class="pg">
        <b> Страница {{ pageNumber + 1 }} из {{ pageCount }} </b>
      </h5>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      pageNumber: 0,
      size: 11,
    };
  },
  props: {
    requests: {
      type: Array,
      required: true,
    },
  },
  methods: {
     ...mapActions(["deleteNote"]),
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    delNote(r) {
      this.deleteNote({
        id: r.id,
      });
    },
  },
  computed: {
    pageCount() {
      let l = this.requests.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.requests.slice(start, end);
    },
  },
};
</script>