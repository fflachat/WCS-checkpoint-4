<template>
<div class="article">
    <h1>{{data.title}}</h1>
    <div class="intro">
          <img class="image" :src="data.imageURL"/>
    <p class="summary">{{data.summary}}</p>
    </div>

    <p class="content">{{data.content}}</p>
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

h1 {
  font-size: 2rem;
  font-weight: bolder;
  margin: 50px;
  text-align: center;
}

.article{
  display: flex;
  flex-direction: column;
}


.intro {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap:30px;
}

.image {
  width: 50%;
  height: 300px;
}

.summary{
    width: 50%;
  height: 300px;
  font-weight: bold;

}

.content {
  margin-top: 30px;
}

</style>