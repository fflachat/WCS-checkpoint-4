<template>
        <form class="search-bar">

           <b-field >
            <b-autocomplete
                v-model="name"
                rounded
                :data="filteredDataArray"
                placeholder="ma recherche"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template #empty>No results found</template>
            </b-autocomplete>
        </b-field>  
        </form>
       
</template>

<script>
    export default {
        data() {
            return {
                data: [
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .includes(this.name.toLowerCase()) > 0
                })
            }
        }
    }
</script>


<style scoped>
.search-bar{
    margin:20px;
}
</style>