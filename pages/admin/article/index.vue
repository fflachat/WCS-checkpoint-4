<template>
<div>
  <h1>Articles : </h1>
<SearchBar />
  <NuxtLink to="./article/create">
    <b-button rounded>Ajouter un article</b-button>
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