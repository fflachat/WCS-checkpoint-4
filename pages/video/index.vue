<template>
<div>
  <h1>Vidéos : </h1>
  <SearchBar />
</div>
</template>

<script>
import Vue from 'vue'
import SearchBar from '~/components/search-bar.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { SearchBar }
})
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bolder;
  margin: 50px;
}
</style>