<template>
<div>
  <h1>Vidéos : </h1>
  <SearchBar />
  <NuxtLink to="./video/create">
    <b-button rounded>Ajouter une vidéo</b-button>
  </NuxtLink>
    <div v-for="video in videos" :key="video.id">
    <h2>{{video.title}}</h2>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import SearchBar from '~/components/search-bar.vue'

export default {
    name: "IndexPage",
    components: { SearchBar },
    layout: "admin",
  data() {
    return {
      videos: [],
    }
    },
    auth: false,
        mounted() {
      this.getAllVideos();
  },
  methods: {
          getAllVideos() {
              axios.get('/api/video/all/').then((response) => {
                this.videos = response.data;
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