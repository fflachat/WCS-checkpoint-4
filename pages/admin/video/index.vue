<template>
<div>
  <h1>Vidéos : </h1>
  <SearchBar />
  <NuxtLink to="./video/create">
    <b-button rounded>Ajouter une vidéo</b-button>
  </NuxtLink>
</div>
</template>

<script>
import Vue from 'vue'
import SearchBar from '~/components/search-bar.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { SearchBar },
    layout: "admin",

})
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bolder;
  margin: 50px;
}
</style>