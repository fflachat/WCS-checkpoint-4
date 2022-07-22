<template>
<div>
    <h2>{{data.title}}</h2>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "VideoDetailPage",
      data() {
    return {
      data: {},
      id: this.$route.params.id
    }
    },
    auth: false,
        mounted() {
    this.getVideoData()  
},
  methods: {
          getVideoData() {
              axios.get(`/api/video/publish/${this.id}`).then((response) => {
                this.data = response.data;
              })}
        },
}
</script>

<style scoped>


</style>