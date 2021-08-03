<template>
  <div class="MovieList row p-2 border bg-dark text-light rounded border-primary shadow-sm mt-2 text-left">
    <form @submit.prevent="getMovies">
      <input v-model="state.query" type="text" name="" id="" placeholder="the movie you are searching for...">
      <button>Search</button>
    </form>
    <!-- <div v-for="m in movies" :key="m.id" class="col-12 movie" @click="setActiveMovie(m)">{{m.title}}</div> -->
    <div class="col-12">
      <Movie v-for="m in movies" :key="m.id" :movie="m" />
    </div>

  </div>
</template>


<script>
import {  computed, onMounted, reactive } from 'vue';
import {moviesService} from '../services/MoviesService'
import { AppState } from '../AppState';
import Movie from '../components/Movie.vue'
export default {
  name: 'MovieList',
  setup(){
const state = reactive({
query: ''
})
onMounted(()=> {
   moviesService.getMovies()
})
    return { 
      state,
      movies: computed(()=> AppState.movies),
      getMovies(){
        moviesService.getMovies(state.query)
      },
      setActiveMovie(movie){
        moviesService.setActiveMovie(movie)
      }
      }
  },
  components: {Movie}
};
</script>


<style scoped>
.movie:hover{
  color: aqua;
  transform: scale(1.1);
  cursor: pointer;
}

</style>