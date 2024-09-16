<template>
    

    <h1>Search your movie</h1>
    <input type="text" placeholder="Search movie" v-model="searchName"/>
    <button  class="btn btn-primary" v-on:click="fetchData">Search</button>

    
   <!-- conditionally render the ShowData component only if the movieList array has at least one item. -->
    <div v-if="movieList.length > 0">
        <ShowData :movieName="movieList"/>
      
    </div>
    <div v-else>
        <p>No movie found</p>
    </div>
  
</template>
<script>
import ShowData from './ShowData.vue';

export default {
    name: 'SearchMovie',
    components: {
        ShowData,
    },data(){
        return{
          
            searchName:"",
            movieList: [],  
            isLoading: true 
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
           //console.log(data);
           this.movieList = data.Search;
           this.isLoading = false;

       }).catch(error=>{
           console.log('error getting the data with the api'+error);
       })

   }
      
        
},mounted(){
     
   
}

}

</script>


<style>



</style>