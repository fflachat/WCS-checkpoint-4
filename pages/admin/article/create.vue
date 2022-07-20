<template>
  <div>
    <h1>Création d'un article :</h1>
    <form class="container">
      <div class="article">
              <b-field label="Corps de l'article" :label-position="labelPosition" >
        <b-input maxlength="2000" type="textarea" class="text-article"></b-input>
      </b-field>
      </div>


      <div>
        <b-field label="Titre" :label-position="labelPosition">
          <b-input value="Mon titre"></b-input>
        </b-field>
         <b-field label="Résumé" :label-position="labelPosition">
        <b-input maxlength="200" type="textarea"></b-input>
      </b-field>
      <UploadImage />
      <b-field label="Ajouter des Tags" :label-position="labelPosition">
            <b-taginput
                :value="[]"
                ellipsis
                icon="label"
                placeholder="Ajouter un tag">
            </b-taginput>
        </b-field>
        <b-button rounded>Créer</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import UploadImage from '~/components/upload-image.vue'

export default {
    name: "CreateArticlePage",
    components: { UploadImage },
    layout: "admin",
    data() {
        return {
            labelPosition: "on-border"
        };
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