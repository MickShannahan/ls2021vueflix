<template>
  <div class="MovieDetails row border border-secondary rounded p-2 mt-2">
    <h2 class="col-12">{{activeMovie.title}}</h2>
    <div class="col-6">
      <img :src="activeMovie.poster" alt="" srcset="" class="img-fluid">
    </div>
    <div class="col-6">{{activeMovie.overview}}</div>
  </div>
</template>


<script>
import { computed, reactive } from 'vue';
import { AppState } from '../AppState';
export default {
  name: 'MovieDetails',
  setup(){
const state = reactive({

})
    return { state,
    activeMovie: computed(()=> AppState.activeMovie)
    }
  }
};
</script>


<style scoped>

</style>