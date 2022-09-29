<template>
  <div class="container">
<Home></Home>
  </div>
</template>

<script>
import Home from "@/views/Home";
import {mapMutations} from "vuex";
export default {
  methods: {
    ...mapMutations(['loadDataDB']),
  },
  mounted() {
    this.loadDataDB()
  },
  components: {Home}
}
</script>


