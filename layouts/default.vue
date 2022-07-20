<template>
<div>
<header>
 <b-navbar :centered=true >
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../static/icon.png"
                    alt="atelier crpyto icon"
                >
            </b-navbar-item>
        </template>
        <template #start >
             <b-navbar-item href="/">
                Home
            </b-navbar-item>
            <b-navbar-item href="/article">
                Articles
            </b-navbar-item>
              <b-navbar-item href="/video">
                Vidéos
            </b-navbar-item>
            <b-navbar-item href="/newsletter">
                Newsletters
            </b-navbar-item>
            <b-navbar-item href="/about">
                A propos
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
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
      ],
    }
  },
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