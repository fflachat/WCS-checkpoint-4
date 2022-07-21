<template>
  <div class="about-page">
    <AboutUs /> 
    <ContactForm/>
  </div>
</template>

<script>
import ContactForm from '../components/contact-form.vue'
import AboutUs from '../components/about-us.vue'

export default {
    name: "IndexPage",
    components: { ContactForm, AboutUs },
      auth: false

}
</script>

<style scoped>

.about-page{
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5vw;
}

</style>