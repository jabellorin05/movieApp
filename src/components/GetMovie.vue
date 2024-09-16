<template>
   <div>


   </div>>
</template>
<script>


export default {
    name: 'GetMovie',
    components: {
        
    },data(){
        return{
            movieName: ''
        }
    },methods:{
       
        getMovie(){
            var apikey = "d3e5991c";

          url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${this.movieName}`;

            fetch(url).then(response=>{
                if(!response.ok){
                    throw Error('ERROR');
                }
                return response.json();
            }).then(data=>{
                console.log(data);
            }).catch(error=>{
                console.log('error getting the data with the api'+error);
            })

        }
    },props:{
        movieName: {
            type: String,
            required: true
        }
    }
}
</script>


<style>

</style>