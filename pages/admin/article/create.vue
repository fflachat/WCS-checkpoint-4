<template>
  <div>
    <h1>Création d'un article :</h1>
    <form class="container"  @submit="createArticle">
      <div class="article">
              <b-field label="Corps de l'article" :label-position="labelPosition" >
        <b-input v-model="article.content" maxlength="2000" type="textarea"  class="text-article" ></b-input>
      </b-field>
      </div>


      <div>
        <b-field label="Titre" :label-position="labelPosition">
          <b-input v-model="article.title" value="Mon titre"></b-input>
        </b-field>
         <b-field label="Résumé" :label-position="labelPosition">
        <b-input v-model="article.summary" maxlength="200" type="textarea"></b-input>
      </b-field>
       <b-field label="Url de l'illustration" :label-position="labelPosition">
            <b-input v-model="article.imageURL" placeholder="image url" type="url"></b-input>
        </b-field>
        <UploadImage />
      <b-field label="Ajouter des Tags" :label-position="labelPosition">
            <b-taginput
                v-model="article.tags"
                ellipsis
                icon="label"
                placeholder="Ajouter un tag">
            </b-taginput>
        </b-field>
        <button type="submit">Créer test</button>
        <b-button rounded>Créer</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import UploadImage from '~/components/upload-image.vue'

export default {
    name: "CreateArticlePage",
    components: { UploadImage },
    layout: "admin",
    auth: false,
    data() {
        return {
            article: {
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
      createArticle() {
        axios.post('/api/article', this.article)
      }
    },
}
</script>


<style scoped>

.article{
  width: 50%;
  height: 100%;
}

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