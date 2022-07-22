<template>
<div>
  <h1>Articles : </h1>
  <NuxtLink to="./article/create">
    <b-button rounded>Ajouter un article</b-button>
  </NuxtLink>
 <SearchBar @update-search="filter" />

    <div class="card-list">

      <div v-for="article in articles" :key="article.id">
       <NuxtLink :to="`/article/${article.id}`">
        <ArticleCard  :data="article"/>
       </NuxtLink>
      </div>

    </div>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from '~/components/search-bar.vue'
import ArticleCard from '~/components/article-card.vue';

export default {
    name: "IndexPage",
    components: { SearchBar, ArticleCard },
    layout: "admin",
    data() {
      return {
        articles: [],
      }
    },
    auth: false,
    mounted() {
      this.getAllArticles();
    },
    methods: {
          getAllArticles() {
              axios.get('/api/article/').then((response) => {
                this.articles = response.data;
              })},
                 filter(search) {
                console.log(search)
                if (search) axios.get(`/api/article/all/filter/${search}`).then((response) => {
                this.feed = response.data;
              })
              else this.getAllArticles();

              },  
        },
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bolder;
  margin: 50px;
}


.card-list{
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap:20px;
}
</style>