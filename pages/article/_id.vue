<template>
<div>
    <h2>{{id}}</h2>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ArticleDetailsPage",
      data() {
    return {
      data: {},
      id: this.$route.params.id
    }
    },
    auth: false,
        mounted() {
    this.getArticleData()  
},
  methods: {
          getArticleData() {
              axios.get(`/api/article/publish/${this.id}`).then((response) => {
                this.data = response.data;
              })}
        },

}
</script>

<style scoped>


</style>