<template>
  <div class="component container-fluid">
    <div class="row ">
      <div class="col-12 bg-success ">
    <img class="img-fluid" alt="Vue logo" src="../assets/logo.png">ueflix
    this is the home page WE DID IT
      </div>
      <div class="col-md-4">
        <MovieList/>
      </div>
      <div class="col-md-8">
        <MovieDetails/>
      </div>
    </div>

  </div>
</template>


<script>
import {  reactive } from 'vue';
import MovieList from '../components/MovieList.vue'
import MovieDetails from '../components/MovieDetails.vue'
export default {
  name: 'HomePage',
  setup(){
const state = reactive({

})
    return { state }
  },
  components: {MovieList, MovieDetails}
};
</script>


<style scoped>
.img-fluid{
  height: 5vh;
}

</style>