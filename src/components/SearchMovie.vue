<template>
    <h1>Search your movie</h1>
    <input type="text" placeholder="Search movie" v-model="searchName"/>
    <button v-on:click="fetchData">Search</button>
</template>
<script>


export default {
    name: 'SearchMovie',
    components: {
        
    },data(){
        return{
          
            searchName:"",
            movieList: [],   
        }
    },
    
    methods:{
        fetchData(){
            var apikey = "d3e5991c";
               if (this.searchName.trim() === '') {
                alert('Please enter a movie name');
                return; 
            }
           
        
         var url = `http://www.omdbapi.com/?apikey=${apikey}&s=${this.searchName}`;

            fetch(url).then(response=>{
                if(!response.ok){
                    throw Error('ERROR');
                }
                return response.json();
            }).then(data=>{
                console.log(data);
                this.movieList = data;

            }).catch(error=>{
                console.log('error getting the data with the api'+error);
            })

        
}
    
}
}

</script>


<style>

</style>