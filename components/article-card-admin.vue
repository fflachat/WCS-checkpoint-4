<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="data.imageURL" alt="article image">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      <h2>{{data.title}}</h2>
       - <span v-if="data.author"> @{{data.author}}</span>
      <div class="tags-container"> 
            <div v-for="tag in data.tags" :key="tag" class="tag">
            {{tag}}     
            </div>
      </div>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
 
    </div>
 
</div>
</template>

<script>

 export default {
 
    props:{
    data: {
        default() { return {}},
        type: Object,
    }
},
 
 }
</script>

<style scoped>

.card {
    width: 30%;
    min-width: 250px;
    min-height: 150px;
    height: 10%;
    border-radius: 20px;
}

.card-image {
    overflow: hidden;
    border-radius: 20px 20px 0 0 ;

}

.content {
    padding: 10px;
}

</style>