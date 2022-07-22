<template>
<div>
<header>
 <b-navbar :centered=true>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../static/icon.png"
                    alt="atelier crpyto icon"
                >
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="/admin/article">
                Articles
            </b-navbar-item>
              <b-navbar-item href="/admin/video">
                Vidéos
            </b-navbar-item>
            <b-navbar-item href="/admin/dashboard">
                Tableau de bord
            </b-navbar-item>
            
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

</header>
   

    <main>

        <Nuxt />
    </main>
        <footer>
      <p>made with ♥ by L'atelier Crypto</p>
    </footer>
    </div>

</template>

<script>
export default {
  name: 'AdminLayout',
  
}
</script>

<style scoped>
footer{
  position: absolute;
  bottom: 0;
width: 100%;
display: flex;
justify-content: center;
}
</style>