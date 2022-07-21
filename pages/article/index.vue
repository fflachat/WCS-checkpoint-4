<template>
  <div>
    <h1>Articles : </h1>
    <SearchBar/>
    <div v-for="article in feed" :key="article.id">
    <h2>{{article.title}}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from '~/components/search-bar.vue'

export default {
 
    name: "ArticlePage",
    components: { SearchBar },
      data() {
    return {
      feed: [],
    }
    },
    auth: false,
        mounted() {
      this.getFeed();
  },
  methods: {
          getFeed() {
              axios.get('api/article/').then((response) => {
                this.feed = response.data;
              })}
        },

}
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bolder;
  margin: 50px;
}
</style>