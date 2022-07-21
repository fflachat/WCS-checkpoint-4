<template>
<div>
  <h1>Newsletter</h1>
  <p>Si tu t'intèresse à la technologie blockchain et à l'écosytème crypto, incris ton email ci-dessous :</p>
   <form>
   <b-field 
            label="Email">
            <b-input 
                type="email"
                value=""
                maxlength="30">
            </b-input>
        </b-field>
      <b-button rounded>Envoyer</b-button>


   </form>

</div>
</template>

<script>
export default {
  name: 'IndexPage',
    auth: false

}
</script>
