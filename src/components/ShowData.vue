<template>
    <div class="container">
        <div v-for="(item, index) in movieName" :key="index">
        <h3>{{item.Title}}</h3>
        <img :src="item.Poster" alt="movie poster" />
        <p>{{item.Year}}</p>

   </div>

    </div>

</template>
<script>


export default {
    name: 'ShowData',
    components: {
        
    },data(){
        return{
          
        }
    },methods:{
       
 
    },props:{
        movieName:{
            type: Array,
            required: true
        }
    }
}
</script>


<style>

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #f2f2f2;
    
  
}   
</style>