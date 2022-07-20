<template>
  <div>
    <h1>Création d'une vidéo :</h1>
    <div class="container">
      <div class="previz"></div>

      <form class="form">
        <b-field label="Titre" :label-position="labelPosition">
          <b-input value="Mon titre"></b-input>
        </b-field>
         <b-field label="Url de la vidéo" :label-position="labelPosition">
            <b-input placeholder="www.youtube.com/mavideo" type="url"></b-input>
        </b-field>
         <b-field label="Description" :label-position="labelPosition">
        <b-input maxlength="200" type="textarea"></b-input>
      </b-field>
      <b-field label="Ajouter des Tags" :label-position="labelPosition">
            <b-taginput
                :value="[]"
                ellipsis
                icon="label"
                placeholder="Ajouter un tag">
            </b-taginput>
        </b-field>
        <b-button rounded>Créer</b-button>
      </form>

    </div>
    
  </div>
</template>

<script>
export default {
  name: 'CreateVideoPage',
  layout: 'admin',
  data() {
        return {
            labelPosition: 'on-border'
        }
    }
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