<template>
  <div @click="setActiveMovie" class="movie row">
    <div class="col-4">
      <img :src="movie.poster" alt="" class="img-fluid">
    </div>
    <div class="col-8">
      <div>{{movie.title}}</div>
      <div class="text-warning">{{movie.score}}</div>
    </div>
  </div>
</template>


<script>
import { reactive } from 'vue';
import { Movie } from '../models/Movie';
import { moviesService } from '../services/MoviesService';
export default {
  name: 'Movie',
  props: { movie:{type: Movie, required: true}},
  setup(props){
const state = reactive({

})
    return { state,
    setActiveMovie(){
      moviesService.setActiveMovie(props.movie)
    }
    }
  }
};
</script>


<style scoped>
.movie:hover{
  color: aqua;
  transform: scale(1.1);
  cursor: pointer;
}

</style>