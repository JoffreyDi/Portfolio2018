
<template>
  <div id="app">
    <Navigation></Navigation>
      <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"  mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>


<script> 
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'home',
  components: {
    Navigation
  }
}
</script >

<style>
 @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>