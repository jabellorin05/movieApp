<template>
    <div>
        <div class="container" v-if="movieDetails">
           
            
            <div class="card" style="width: 18rem;">
                <img :src="movieDetails.Poster" class="card-img-top" alt="Poster of {{ movieDetails.Title }}">
                <div class="card-body">
                    <h5 class="card-title">{{ movieDetails.Title }}</h5>
                    <p class="card-text">Year: {{ movieDetails.Year }}</p>
                    <p class="card-text">Rated: {{ movieDetails.Rated }}</p>
                    <p class="card-text">Released: {{ movieDetails.Released }}</p>
                    <p class="card-text">Runtime: {{ movieDetails.Runtime }}</p>
                    <p class="card-text">Genre: {{ movieDetails.Genre }}</p>
                    <p class="card-text">Director: {{ movieDetails.Director }}</p>  
                    <p class="card-text">Writer: {{ movieDetails.Writer }}</p>
                    <p class="card-text">Actors: {{ movieDetails.Actors }}</p>
                    <p class="card-text">Plot: {{ movieDetails.Plot }}</p>
                    <p class="card-text">Language: {{ movieDetails.Language }}</p>
                    <p class="card-text">Country: {{ movieDetails.Country }}</p>
                    <p class="card-text">Awards: {{ movieDetails.Awards }}</p>    
                    <p class="card-text">IMDB Rating: {{ movieDetails.imdbRating }}</p>
                    <p class="card-text">IMDB Votes: {{ movieDetails.imdbVotes }}</p>
                    <p class="card-text">IMDB ID: {{ movieDetails.imdbID }}</p>
                </div>
            </div>
        </div>

        <div v-else>
            <p>Loading movie details...</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieDetails',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    async mounted() {
        await this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                var apikey = "d3e5991c";
                const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${this.id}`);
                const data = await response.json();
                this.movieDetails = data;
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        }
    },
    data() {
        return {
            movieDetails: null
        };
    }
}
</script>

<style scoped>

.container {
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
