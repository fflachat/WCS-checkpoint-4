<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
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
}
 }
</script>



<style scoped>

.card {
    width: 30%;
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