<template>
<div>
  <h1>Vidéos : </h1>
  <SearchBar />
  <div v-for="video in feed" :key="video.id">
    <h2>{{video.title}}</h2>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import SearchBar from '~/components/search-bar.vue'

export default {
    name: "VideosPage",
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
              axios.get('api/video/publish/').then((response) => {
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