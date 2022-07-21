<template>
<div class="login-page">
    <LoginForm />
</div>
</template>

<script>
import LoginForm from '~/components/login-form.vue'

export default ({
    name: "IndexPage",
        components: { LoginForm },
  auth: false

})
</script>

<style scoped>
.login-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>