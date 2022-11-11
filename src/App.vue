<template>
  <div class="container">
<Home></Home>
  </div>
</template>

<script>
import Home from "@/views/Home";
import {mapActions, mapMutations} from "vuex";
export default {
  methods: {
    ...mapActions(['loadDataDB']),
  },
  mounted() {
    this.loadDataDB()
  },
  components: {Home}
}
</script>


