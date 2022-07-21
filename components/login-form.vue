<template>
    <form  class="login" @submit.prevent="userLogin" >
        <b-field 
        label="Username"
           >
            <b-input v-model="login.email" value="florent.flachat@gmail.com" placeholder="florent.flachat@gmail.com" maxlength="30"  ></b-input>
        </b-field>

        <b-field 
        label="Password">
            <b-input v-model="login.password"  value="adminFOMO1!" placeholder="adminFOMO1!" type="password" maxlength="30"></b-input>
        </b-field>
        <button>Log In</button>
    </form>
</template>

<script>
   export default {
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.login })
        console.log('test', response)
      } catch (err) {
        console.log('test')
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.login{
    width: 50%;
    height: 500px;
    border: solid black 0.2rem;
    border-radius: 20px;
    padding:20px;
}
</style>