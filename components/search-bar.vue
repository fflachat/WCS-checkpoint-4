<template>
        <form class="search-bar">

           <b-field >
            <b-autocomplete
                v-model="search"
                rounded
                placeholder="ma recherche"
                icon="magnify"
                clearable
                :change="updateSearch()"
               />
        </b-field>  
        </form>
       
</template>

<script>
    export default {
        data() {
            return {
                search:''
            }
        },
        methods:{
            updateSearch(){
                this.$emit('update-search', this.search)
            }
        }
    }
</script>


<style scoped>
.search-bar{
    margin:20px;
}
</style>