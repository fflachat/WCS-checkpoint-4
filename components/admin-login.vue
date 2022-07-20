<template>
    <div class="login">
        <b-field 
        label="Username"
           >
            <b-input value="" maxlength="30"></b-input>
        </b-field>

        <b-field 
        label="Password">
            <b-input value="" type="password" maxlength="30"></b-input>
        </b-field>
        <button>Log In</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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