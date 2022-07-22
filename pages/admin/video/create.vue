<template>
  <div>
    <h1>Création d'une vidéo :</h1>
    <div class="container">
      <div class="previz"></div>

      <form class="form" @submit="createVideo">
        <b-field label="Titre" :label-position="labelPosition">
          <b-input v-model="video.title"></b-input>
        </b-field>
         <b-field label="Url de la vidéo" :label-position="labelPosition">
            <b-input v-model="video.videoURL" placeholder="www.youtube.com/mavideo" type="url"></b-input>
        </b-field>
         <b-field  label="Description" :label-position="labelPosition">
        <b-input v-model="video.summary" maxlength="200" type="textarea"></b-input>
      </b-field>
      <b-field label="Ajouter des Tags" :label-position="labelPosition">
            <b-taginput
                v-model="video.tags"                
                ellipsis
                icon="label"
                placeholder="Ajouter un tag">
            </b-taginput>
        </b-field>
        <b-button native-type="submit" rounded>Créer</b-button>
      </form>

    </div>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateVideoPage',
  layout: 'admin',
   auth: false,
    data() {
        return {
            video: {
                title:"",
                imageURL:"",
                tags:[],
                summary:"",
                content:"",
                authorId:1,
            },
            labelPosition: "on-border"
        };
    },
    methods: {
      createVideo() {
        axios.post('/api/video', this.video)
      }
    },
}
</script>


<style scoped>

.container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

h1 {
  font-size: 2rem;
  font-weight: bolder;
  margin: 50px;
}

</style>