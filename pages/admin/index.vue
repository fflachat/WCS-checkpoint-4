<template>
<div class="login-page">
    <AdminLogin />
</div>
</template>

<script>
import AdminLogin from '~/components/admin-login.vue'

export default ({
    name: "IndexPage",
        components: { AdminLogin },
layout: "admin",
})
</script>

<style scoped>
.login-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>