<template>
  <div>
    <h1>Articles : </h1>
    <SearchBar @update-search="filter" />

    <div class="card-list">

      <div v-for="article in feed" :key="article.id">
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
 
    name: "ArticlesPage",
    components: { SearchBar, ArticleCard },
      data() {
    return {
      feed: [],
    }
    },
    auth: false,
    watch: {
        
      },  
  
  mounted() {
      this.getFeed();
  },  
 
  methods: {
          getFeed() {
              axios.get('/api/article/publish').then((response) => {
                this.feed = response.data;
              })},   
              filter(search) {
                console.log(search)
                if (search) axios.get(`/api/article/filter/${search}`).then((response) => {
                this.feed = response.data;
              })
              else this.getFeed();

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